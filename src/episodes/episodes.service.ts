import { Injectable } from '@nestjs/common';
import { Episode } from 'contents-backend';
import { ContentsService } from 'src/contents/contents.service';

@Injectable()
export class EpisodesService {
  constructor(private contentsService: ContentsService) {}

  getEpisodeById(content_id: string, episode_id: string): Episode {
    const content = this.contentsService.getContentById(content_id);
    const episode = content.episodes.find(
      (episode) => episode.id === episode_id,
    );

    return episode;
  }
}
