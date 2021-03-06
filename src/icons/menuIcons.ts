import {RootScreens} from '../navigation/screens';

export enum Characteristic {
  Name = 'name',
  Manacost = 'manacost ',
}

export const icons = {
  menu: {
    [RootScreens.Home]:
      'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_HOF.png',
    [RootScreens.Addition]:
      'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_Scholomancy.png',
    [RootScreens.Options]:
      'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_GVG.png',
    [RootScreens.DescriptionSets]: undefined,
    [RootScreens.Description]: undefined,
    [RootScreens.CardsOfSets]: undefined,
  },
  description: {
    [Characteristic.Name]:
      'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_Classic.png',

    [Characteristic.Manacost]:
      'https://www.pngjoy.com/pngl/371/6882643_crystal-icon-hearthstone-mana-png-transparent-png.png',
  },
};
