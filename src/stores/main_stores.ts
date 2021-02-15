import {create} from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {CardsAPI, HeartStoneAPI} from '@api/CardAPI';
import {Http} from '@api/http_api';
import {CardStore, StoreOfCards} from './cards';
import {SetsStore, StoreOfSets} from './sets';
import {StoreOfUser, UserStore} from './user';

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
