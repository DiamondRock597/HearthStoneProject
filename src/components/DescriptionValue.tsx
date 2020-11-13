import React from 'react';
import {View, Text, Image} from 'react-native';
import {Characteristic, icons} from '../icons/icons';
import {styles} from '../styles/home';

enum DescriptionValues {
  Name = 'name',
}

const imagesMap = {
  [DescriptionValues.Name]: (
    <Image
      style={styles.icon}
      source={{
        uri: icons.discription[Characteristic.Name],
      }}
    />
  ),
};

interface Props {
  valueType: DescriptionValues;
}

export const DescriptionValue: React.FC<Props> = ({valueType}: Props) => {
  return (
    <View>
      {imagesMap[valueType]}
      <Text></Text>
    </View>
  );
};
