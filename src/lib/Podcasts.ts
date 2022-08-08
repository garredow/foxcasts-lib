import { Subscribe } from '../mutations/Subscribe';
import { Unsubscribe } from '../mutations/Unsubscribe';
import { Query } from './Query';

export class Podcasts {
  private query: Query;

  constructor(query: Query) {
    this.query = query;
  }

  async subscribe(podcastId: number): Promise<void> {
    await this.query.send(Subscribe, { podcastId });
  }

  async unsubscribe(podcastId: number): Promise<void> {
    await this.query.send(Unsubscribe, { podcastId });
  }
}
