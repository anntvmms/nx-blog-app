import { IsNotEmpty } from '@nestjs/class-validator';

export class CreateBlogDto {
  @IsNotEmpty()
  newsTitle: string;
  @IsNotEmpty()
  detailsContent: string;
  @IsNotEmpty()
  doj: Date;
  @IsNotEmpty()
  category: string;
}
