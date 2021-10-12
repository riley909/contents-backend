import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { Content } from 'contents-backend';
import { ContentsService } from './contents.service';
import { GetContentsFilterDto } from './dto/get-contents-filter.dto';
import { UpdateContentDto } from './dto/update-content.dto';

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

  @Patch('/:id')
  updateContent(
    @Param('id') id: string,
    @Body() updateContentDto: UpdateContentDto,
  ): Content {
    return this.contentsService.updateContent(id, updateContentDto);
  }

  @Patch('/:id/status')
  closeContentStatus(@Param('id') id: string): Content {
    return this.contentsService.closeContentStatus(id);
  }

  @Patch('/:id/use')
  closeContentUseStatus(@Param('id') id: string): Content {
    return this.contentsService.closeContentUseStatus(id);
  }
}
