import {Card as CardModel} from '../models/card';
import {SetModel} from '../models/set';

export enum RootScreens {
  Home = 'Home',
  Addition = 'Addition',
  DescriptionSets = 'Add-on Description',
  Description = 'Description',
  CardsOfSets = 'Cards Of Sets',
}
export type RootStackParamList = {
  [RootScreens.Home]: undefined;
  [RootScreens.Addition]: undefined;
  [RootScreens.Description]: {card: CardModel};
  [RootScreens.DescriptionSets]: {item: SetModel};
  [RootScreens.CardsOfSets]: {id: number; name: string};
};
