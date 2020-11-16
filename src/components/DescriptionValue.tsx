import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {icons, Characteristic} from '../icons/menuIcons';
import {styles} from '../styles/description';
import {localisation} from '../localisation/localisation';

export enum DescriptionValues {
  Name = 'Name',
  Manacost = 'Manacost',
  Attack = 'Attack',
  Health = 'Health',
  Durability = 'Durability',
}

const imagesMap = {
  [DescriptionValues.Name]: (
    <Image
      style={styles.icon}
      source={{
        uri: icons.description[Characteristic.Name],
      }}
    />
  ),
  [DescriptionValues.Manacost]: (
    <Image
      style={styles.icon}
      source={{
        uri: icons.description[Characteristic.Manacost],
      }}
    />
  ),
  [DescriptionValues.Attack]: <Icon name={'sword'} size={18} />,
  [DescriptionValues.Health]: <Icon name={'heart'} size={18} color={'red'} />,
  [DescriptionValues.Durability]: (
    <Icon name={'shield'} size={18} color={'gray'} />
  ),
};

interface Props {
  valueType: DescriptionValues;
  value: string | number;
}

export const DescriptionValue: React.FC<Props> = ({
  valueType,
  value,
}: Props) => (
  <View style={styles.block}>
    <View style={styles.textBlockWithIcon}>
      {imagesMap[valueType]}

      <Text style={styles.title}>
        {localisation.t(`description.${valueType}`)}:
      </Text>
      {valueType !== DescriptionValues.Name ? (
        <Text style={styles.answer} numberOfLines={3}>
          {value}
        </Text>
      ) : null}
    </View>
    {valueType === DescriptionValues.Name ? (
      <Text style={styles.answer} numberOfLines={3}>
        {value}
      </Text>
    ) : null}
  </View>
);
