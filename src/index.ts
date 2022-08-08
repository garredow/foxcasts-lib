import { Episodes } from './lib/Episodes';
import { Podcasts } from './lib/Podcasts';
import { Query } from './lib/Query';
import pkg from './pkg.json';

export type Config = {
  apiUrl: string;
  apiToken: string;
};

export class FoxcastsLib {
  public static version = pkg.version;
  public query: Query;
  public podcasts: Podcasts;
  public episodes: Episodes;

  constructor(config: Config) {
    this.query = new Query(config);
    this.podcasts = new Podcasts(this.query);
    this.episodes = new Episodes(this.query);
  }
}
