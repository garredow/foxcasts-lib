import pkg from './pkg.json';

export type Config = {
  dbName: string;
};

export class FoxcastsLib {
  public static version = pkg.version;

  constructor(options: Partial<Config>) {
    console.log('options', options);
  }
}
