import { Controller, Get, Param, Patch } from '@nestjs/common';
import { Episode } from 'contents-backend';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) {}

  @Get('/:content_id/:episode_id')
  getEpisodeById(
    @Param('content_id') content_id: string,
    @Param('episode_id') episode_id: string,
  ): Episode {
    return this.episodesService.getEpisodeById(content_id, episode_id);
  }

  @Patch('/buy/:content_id/:episode_id')
  buyEpisode(
    @Param('content_id') content_id: string,
    @Param('episode_id') episode_id: string,
  ): Episode {
    return this.episodesService.buyEpisode(content_id, episode_id);
  }
}
