import { EpisodeProgress } from '../mutations/EpisodeProgress';
import { Graph } from './Graph';

export class Episodes {
  private graph: Graph;

  constructor(graph: Graph) {
    this.graph = graph;
  }

  async updateProgress(episodeId: number, progress: number): Promise<void> {
    await this.graph.mutation(EpisodeProgress, { episodeId, progress });
  }
}
