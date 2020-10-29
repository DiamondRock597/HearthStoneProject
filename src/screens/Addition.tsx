import React from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const items = [
  {label: 'Warrior', value: 'Warrior'},
  {label: 'Priest', value: 'Priest'},
  {label: 'Mage', value: 'Mage'},
  {label: 'Rogue', value: 'Rogue'},
  {label: 'Druid', value: 'Druid'},
  {label: 'Shaman', value: 'Shaman'},
  {label: 'DemonHunter', value: 'DemonHunter'},
  {label: 'Paladin', value: 'Paladin'},
];

export const Addition = () => {
  return (
    <View>
      <Text>Addition</Text>
      <DropDownPicker
        style={{marginVertical: 20}}
        items={items}
        dropDownStyle={{marginTop: 15}}
        itemStyle={{
          backgroundColor: 'white',
        }}
      />
    </View>
  );
};
