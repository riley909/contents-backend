import { IsNumber, IsString } from 'class-validator';

export class UpdateContentDto {
  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsNumber()
  like: number;

  @IsString()
  summary: string;
}
