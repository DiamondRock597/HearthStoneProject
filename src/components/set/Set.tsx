import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AutoHeightImage from 'react-native-auto-height-image';

import {SetModel} from '@models/set';

import {styles} from './styles/set';

interface Props {
  item: SetModel;
  onPress: (item: SetModel) => void;
}

export const Set: React.FC<Props> = ({item, onPress}: Props) => (
  <TouchableOpacity style={styles.itemStyle} onPress={() => onPress(item)}>
    <AutoHeightImage width={400} source={{uri: item.image}} />
  </TouchableOpacity>
);
