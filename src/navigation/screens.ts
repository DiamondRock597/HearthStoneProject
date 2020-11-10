import {Card as CardModel} from '../models/card';
import {SetModel} from '../models/set';

export enum RootScreens {
  Home = 'Home',
  Addition = 'Addition',
  DiscriptionSets = 'Add-on Discription',
  Discription = 'Discription',
  CardsOfSets = 'Cards Of Sets',
}
export type RootStackParamList = {
  [RootScreens.Home]: undefined;
  [RootScreens.Addition]: undefined;
  [RootScreens.Discription]: {card: CardModel};
  [RootScreens.DiscriptionSets]: {item: SetModel};
  [RootScreens.CardsOfSets]: {card: CardModel};
};
