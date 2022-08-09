import { Subscribe } from '../mutations/Subscribe';
import { Unsubscribe } from '../mutations/Unsubscribe';
import { Graph } from './Graph';

export class Podcasts {
  private graph: Graph;

  constructor(graph: Graph) {
    this.graph = graph;
  }

  async subscribe(podcastId: number): Promise<void> {
    await this.graph.mutation(Subscribe, { podcastId });
  }

  async unsubscribe(podcastId: number): Promise<void> {
    await this.graph.mutation(Unsubscribe, { podcastId });
  }
}
