import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AutoHeightImage from 'react-native-auto-height-image';
import {Item} from '../screens/Home';

export const Card: React.FC<Item> = ({item}: Item) => (
  <TouchableOpacity>
    <AutoHeightImage width={200} source={{uri: item.img}} />
  </TouchableOpacity>
);
