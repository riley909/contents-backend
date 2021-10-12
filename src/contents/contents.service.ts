import { Injectable, NotFoundException } from '@nestjs/common';
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

  getContentById(id: string): Content {
    const found = this.contents.find((content) => content.id === id);

    if (!found) {
      throw new NotFoundException(
        `ID "${id}"를 가진 컨텐츠가 존재하지 않습니다.`,
      );
    }

    return found;
  }
}
