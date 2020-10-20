import {CardStore} from './cards';
export enum Stores {
  Cards = 'cards',
  Adition = 'adition',
}
export const createRootStore = () => {
  const cards = new CardStore();

  return {[Stores.Cards]: cards};
};
