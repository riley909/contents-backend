import { Injectable } from '@nestjs/common';
import { Content } from 'contents-backend';
import { GetContentsFilterDto } from './dto/get-contents-filter.dto';
import { data } from 'contents-backend';

@Injectable()
export class ContentsService {
  contents: Content[] = data;

  getContents(filterDto: GetContentsFilterDto): Content[] {
    const { id, title } = filterDto;
    let contents = this.contents;

    if (id) {
      contents = contents.filter((content) => content.id === id);
    }

    if (title) {
      contents = contents.filter((content) => content.title === title);
    }

    return contents;
  }
}
