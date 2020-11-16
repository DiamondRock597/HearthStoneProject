import {CardsAPI, HeartStoneAPI} from '../api/CardAPI';
import {Http} from '../api/http_api';
import {localisation} from '../localisation/localisation';
import {CardStore, StoreOfCards} from './cards';
import {SetsStore} from './sets';

export enum Stores {
  Cards = 'cards',
  Sets = 'sets',
}

export class RootStore {
  public [Stores.Cards]: StoreOfCards;
  public [Stores.Sets]: SetsStore;

  public constructor(HeartstoneAPI: HeartStoneAPI) {
    this[Stores.Cards] = new CardStore(HeartstoneAPI);
    this[Stores.Sets] = new SetsStore(HeartstoneAPI);
  }
}

export const createRootStore = (): RootStore => {
  const defaultParams = {
    access_token: 'US2MhU1048oqAV5H57dmn8U5cPOiiTTAdB',
    locale: localisation.t('http'),
  };

  const http = new Http('https://us.api.blizzard.com/hearthstone/', {
    params: defaultParams,
  });
  const HeartstoneAPI = new CardsAPI(http);
  const rootStore = new RootStore(HeartstoneAPI);
  return rootStore;
};
