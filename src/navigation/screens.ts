import {Card as CardModel} from '../models/card';

export enum RootScreens {
  Home = 'Home',
  Addition = 'Addition',
  Discription = 'Discription',
}
export type RootStackParamList = {
  [RootScreens.Home]: undefined;
  [RootScreens.Addition]: undefined;
  [RootScreens.Discription]: {card: CardModel};
};
