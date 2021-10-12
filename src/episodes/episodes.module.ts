import { Module } from '@nestjs/common';
import { ContentsService } from 'src/contents/contents.service';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';

@Module({
  controllers: [EpisodesController],
  providers: [EpisodesService, ContentsService],
})
export class EpisodesModule {}
