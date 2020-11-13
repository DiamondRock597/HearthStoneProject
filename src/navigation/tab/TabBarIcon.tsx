import React from 'react';
import {Image} from 'react-native';
import {icons} from '../../icons/menuIcons';
import {RootScreens} from '../screens';

const tabIcon = (color: string) => ({tintColor: color, width: 40, height: 40});

interface Props {
  iconsType: RootScreens.Home | RootScreens.Addition;
  color: string;
}

export const TabBarIcon: React.FC<Props> = ({iconsType, color}: Props) => (
  <Image
    style={tabIcon(color)}
    source={{
      uri: icons.menu[iconsType],
    }}
  />
);
