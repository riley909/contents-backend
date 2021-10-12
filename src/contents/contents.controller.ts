import { Controller, Get, Param, Query } from '@nestjs/common';
import { Content } from 'contents-backend';
import { ContentsService } from './contents.service';
import { GetContentsFilterDto } from './dto/get-contents-filter.dto';

@Controller('contents')
export class ContentsController {
  constructor(private contentsService: ContentsService) {}

  @Get()
  getContents(@Query() filterDto: GetContentsFilterDto): Content[] {
    return this.contentsService.getContents(filterDto);
  }

  @Get('/:id')
  getContentById(@Param('id') id: string): Content {
    return this.contentsService.getContentById(id);
  }
}
