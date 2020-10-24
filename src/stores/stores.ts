import {RootScreens} from '../navigation/screens';
import {CardStore} from './cards';

export enum Stores {
  Cards = 'cards',
  Adition = 'adition',
}

export interface RootStore {
  [Stores.Cards]: CardStore;
}

export const createRootStore = (): RootStore => {
  const cards = new CardStore();

  return {[Stores.Cards]: cards};
};
