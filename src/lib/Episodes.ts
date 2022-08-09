import { EpisodeProgress } from '../mutations/EpisodeProgress';
import { Graph } from './Graph';

export class Episodes {
  private graph: Graph;

  constructor(query: Graph) {
    this.graph = query;
  }

  async updateProgress(episodeId: number, progress: number): Promise<void> {
    await this.graph.mutation(EpisodeProgress, { episodeId, progress });
  }
}
