import { ConflictException, Injectable } from '@nestjs/common';
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

  buyEpisode(content_id: string, episode_id: string): Episode {
    const episode = this.getEpisodeById(content_id, episode_id);

    if (episode.isBuy === true) {
      throw new ConflictException('이미 구매한 에피소드입니다.');
    }
    episode.isBuy = true;
    return episode;
  }
}
