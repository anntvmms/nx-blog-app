import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBlogDto } from '../DTO/create-blog.dto';
import { UpdateBlogDto } from '../DTO/update-blog.dto';
import { BlogService } from './blog.service';

@Controller('blogs')
// @UseGuards(AuthGuard())
export class BlogController {
  constructor(private blogService: BlogService) {}
  @Get()
  getAllBlogs() {
    return this.blogService.getAllBlogs();
  }

  @Post()
  createNewBlog(@Body() data: CreateBlogDto) {
    return this.blogService.createBlog(data);
  }

  @Put(':id')
  updateBlog(@Body() data: UpdateBlogDto, @Param('id') id: number) {
    return this.blogService.update(id, data);
  }

  @Delete(':id')
  deleteBlog(@Param('id') id: number) {
    return this.blogService.delete(id);
  }
}
