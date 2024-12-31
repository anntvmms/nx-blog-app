import { IsNotEmpty } from '@nestjs/class-validator';

export class UpdateBlogDto {
  @IsNotEmpty()
  newsTitle: string;
  @IsNotEmpty()
  detailsContent: string;
  @IsNotEmpty()
  doj: Date;
  @IsNotEmpty()
  category: string;
}
