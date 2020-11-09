import {Card as CardModel} from '../models/card';
import {SetModel} from '../models/set';

export enum RootScreens {
  Home = 'Home',
  Addition = 'Addition',
  DiscriptionSets = 'Add-on Discription',
  Discription = 'Discription',
}
export type RootStackParamList = {
  [RootScreens.Home]: undefined;
  [RootScreens.Addition]: undefined;
  [RootScreens.Discription]: {card: CardModel};
  [RootScreens.DiscriptionSets]: {item: SetModel};
};
