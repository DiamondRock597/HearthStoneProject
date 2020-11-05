import {CardsAPI, HeartStoneAPI} from '../api/CardAPI';
import {Http} from '../api/http_api';
import {CardStore} from './cards';

export enum Stores {
  Cards = 'cards',
  Adition = 'adition',
}

export class RootStore {
  public [Stores.Cards]: CardStore;

  public constructor(HeartstoneAPI: HeartStoneAPI) {
    this[Stores.Cards] = new CardStore(HeartstoneAPI);
  }
}

export const createRootStore = (): RootStore => {
  const defaultParams = {
    access_token: 'USjGhEOktER1AqKh3PkasdpxwGsWxBpSqq',
    locale: 'en_US',
  };

  const http = new Http('https://us.api.blizzard.com/hearthstone/', {
    params: defaultParams,
  });
  const HeartstoneAPI = new CardsAPI(http);
  const rootStore = new RootStore(HeartstoneAPI);
  return rootStore;
};
