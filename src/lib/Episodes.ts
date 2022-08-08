import { EpisodeProgress } from '../mutations/EpisodeProgress';
import { Query } from './Query';

export class Episodes {
  private query: Query;

  constructor(query: Query) {
    this.query = query;
  }

  async updateProgress(episodeId: number, progress: number): Promise<void> {
    await this.query.send(EpisodeProgress, { episodeId, progress });
  }
}
