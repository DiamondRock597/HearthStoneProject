import {Params} from '../api/CardAPI';
import {Http, HttpAPI} from '../api/http_api';
import {CardStore} from './cards';

export enum Stores {
  Cards = 'cards',
  Adition = 'adition',
}

export class RootStore {
  public [Stores.Cards]: CardStore;

  private http: HttpAPI;
  private params: Params;

  public constructor(http: HttpAPI, params: Params) {
    this.http = http;
    this.params = params;

    this[Stores.Cards] = new CardStore(this.http, this.params);
  }
}

export const createRootStore = (): RootStore => {
  const params = {
    access_token: 'USVLLTsXNnj2RZEIEGgGrtzxpl6JEWAIbY',
    locale: 'en_US',
  };

  const http = new Http('https://us.api.blizzard.com/hearthstone/', params);
  const rootStore = new RootStore(http, params);
  return rootStore;
};
