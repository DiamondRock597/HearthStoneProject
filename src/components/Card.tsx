import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AutoHeightImage from 'react-native-auto-height-image';

import {CardModel} from '../models/Card';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootScreens, RootStackParamList} from '../navigation/screens';

interface Props {
  item: CardModel;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
}
export const Card: React.FC<Props> = ({item, navigation}: Props) => (
  <TouchableOpacity
    onPress={() => navigation.navigate(RootScreens.Discription, {card: item})}>
    <AutoHeightImage width={200} source={{uri: item.img}} />
  </TouchableOpacity>
);
