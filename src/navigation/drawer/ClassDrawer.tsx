import React from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {Classes, ClassParam} from '../../models/card_filters';
import {styles} from '../../styles/dropdown';

const classes = [
  {label: 'Warrior', value: Classes.Warrior},
  {label: 'Priest', value: Classes.Priest},
  {label: 'Mage', value: Classes.Mage},
  {label: 'Rogue', value: Classes.Rogue},
  {label: 'Druid', value: Classes.Druid},
  {label: 'Shaman', value: Classes.Shaman},
  {label: 'Demon Hunter', value: Classes.DemonHunter},
  {label: 'Paladin', value: Classes.Paladin},
  {label: 'Hunter', value: Classes.Hunter},
  {label: 'Warlock', value: Classes.Warlock},
];

const types = [
  {label: 'Warrior', value: Classes.Warrior},
  {label: 'Priest', value: Classes.Priest},
  {label: 'Mage', value: Classes.Mage},
];

interface Props {
  height: number;
  onSelect: (text: Classes) => void;
}

export const TypeDrawer: React.FC<Props> = ({height, onSelect}: Props) => (
  <View style={{height}}>
    <DropDownPicker
      placeholder={'Select class'}
      dropDownMaxHeight={500}
      style={styles.block}
      items={classes}
      containerStyle={styles.containerStyle}
      dropDownStyle={styles.dropDownStyle}
      onChangeItem={(item) => onSelect(item.value)}
    />

    {/* <DropDownPicker
      placeholder={'Select type'}
      dropDownMaxHeight={500}
      style={styles.block}
      items={items}
      containerStyle={styles.containerStyle}
      dropDownStyle={styles.dropDownStyle}
      onChangeItem={(item) => onSelect(item.value)}
    /> */}
  </View>
);
