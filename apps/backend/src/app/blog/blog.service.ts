import { CreateBlogDto } from '../DTO/create-blog.dto';
import { Injectable } from '@nestjs/common';
import { BlogEntity } from '../Entity/blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UpdateBlogDto } from '../DTO/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity) private repo: Repository<BlogEntity>,
  ) {}

  async getAllBlogs(): Promise<BlogEntity[]> {
    return await this.repo.find();
  }

  async createBlog(createBlogDTO: CreateBlogDto): Promise<BlogEntity> {
    const blog: BlogEntity = new BlogEntity();
    const { newsTitle, detailsContent, category, doj } = createBlogDTO;
    blog.newsTitle = newsTitle;
    blog.detailsContent = detailsContent;
    blog.category = category;
    blog.doj = doj;

    this.repo.create(blog);
    return await this.repo.save(blog);
  }

  async update(id: number, updateDTO: UpdateBlogDto): Promise<BlogEntity> {
    await this.repo.update({ id }, { ...updateDTO });
    return this.repo.findOne({ where: { id } });
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.repo.delete({ id });
  }
}
