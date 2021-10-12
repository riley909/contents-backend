import { IsOptional, IsString } from 'class-validator';

export class GetContentsFilterDto {
  @IsOptional()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  title: string;
}
