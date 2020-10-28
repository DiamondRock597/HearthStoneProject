import {CardModel} from '../models/Card';

export enum RootScreens {
  Home = 'Home',
  Addition = 'Adition',
  Discription = 'Discription',
  HomeClass = 'HomeClass',
}
export type RootStackParamList = {
  [RootScreens.Home]: {paramsAtribute: string};
  [RootScreens.Addition]: undefined;
  [RootScreens.Discription]: {card: CardModel};
  [RootScreens.HomeClass]: undefined;
};
