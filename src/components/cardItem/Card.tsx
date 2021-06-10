import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AutoHeightImage from 'react-native-auto-height-image';

import {Card as CardModel} from '@models/card';

interface Props {
  item: CardModel;
  onPress: (item: CardModel) => void;
}

export const Card: React.FC<Props> = ({item, onPress}: Props) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <AutoHeightImage width={200} source={{uri: item.img}} />
  </TouchableOpacity>
);
