import {CardModel} from '../models/Card';

export enum RootScreens {
  Home = 'Home',
  Addition = 'Adition',
  Discription = 'Discription',
}
export type RootStackParamList = {
  [RootScreens.Home]: undefined;
  [RootScreens.Addition]: undefined;
  [RootScreens.Discription]: {card: CardModel};
};
