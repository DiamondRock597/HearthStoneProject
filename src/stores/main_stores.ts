import {create} from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {CardStore, StoreOfCards} from './cards';
import {SetsStore, StoreOfSets} from './sets';
import {StoreOfUser, UserStore} from './user';
import {Http} from 'api/http_api';
import {injector} from 'utils/injector';
import {Configs} from 'config/configs';
import {Repositories} from 'typings/repositories';
import {CardsRepository} from 'api/card_api';
import {Servises} from 'typings/servises';
import {CardsServise} from 'api/cards';
import {SetsRepository} from 'api/set_api';
import {SetsServise} from 'api/sets';

const initLogic = async () => {
  const defaultParams = {
    access_token: 'USjBabWzk8ZkSq3u8POlD6uJvYJqBKjIw1',
  };
  const http = new Http('https://us.api.blizzard.com/hearthstone/', {
    params: defaultParams,
  });

  injector.set(Configs.Http, http);

  injector.set(Repositories.Cards, new CardsRepository());
  injector.set(Servises.Cards, new CardsServise());

  injector.set(Repositories.Sets, new SetsRepository());
  injector.set(Servises.Sets, new SetsServise());
};

export enum Stores {
  Cards = 'cards',
  Sets = 'sets',
  User = 'user',
}

export enum StoresMethods {
  LoadStores = 'loadStores',
  CleanStore = 'cleanStore',
}

type PersistStores = Stores.User;

export interface MainStore {
  [Stores.User]: StoreOfUser;
  [Stores.Sets]: StoreOfSets;
  [Stores.User]: StoreOfUser;

  [StoresMethods.LoadStores]: () => Promise<void>;
  [StoresMethods.CleanStore]: () => void;
}

export class RootStore implements MainStore {
  public static readonly persistedStores: Array<PersistStores> = [Stores.User];
  public [Stores.Cards]: StoreOfCards;
  public [Stores.Sets]: StoreOfSets;
  public [Stores.User]: StoreOfUser;

  public constructor() {
    initLogic();
    this[Stores.Cards] = new CardStore();
    this[Stores.Sets] = new SetsStore();
    this[Stores.User] = new UserStore();
  }

  public [StoresMethods.LoadStores]: () => Promise<void> = async () => {
    await Promise.all(RootStore.persistedStores.map(this.loadStore));
  };

  public [StoresMethods.CleanStore]: () => void = () => {
    RootStore.persistedStores.map((store) => this[store].dispose());
  };

  private loadStore: (storeName: PersistStores) => void = async (storeName) => {
    const hydrate = create({storage: AsyncStorage, jsonify: true});
    await hydrate(storeName, this[storeName]);
    await this[storeName].onLoad();
  };
}

export const createRootStore = (): RootStore => {
  const rootStore = new RootStore();
  return rootStore;
};
