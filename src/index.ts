import { Episodes } from './lib/Episodes';
import { Graph } from './lib/Graph';
import { Podcasts } from './lib/Podcasts';
import pkg from './pkg.json';

export type Config = {
  apiUrl: string;
  apiToken: string;
};

export class FoxcastsLib {
  public static version = pkg.version;
  public graph: Graph;
  public podcasts: Podcasts;
  public episodes: Episodes;

  constructor(config: Config) {
    this.graph = new Graph(config);
    this.podcasts = new Podcasts(this.graph);
    this.episodes = new Episodes(this.graph);
  }
}
