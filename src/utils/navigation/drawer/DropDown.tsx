import React from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {localisation} from '../../../localisation/localisation';

import {Classes, MinionType, Rarity, Types} from '../../../models/card_filters';
import {styles} from '../../../styles/dropdown';

const classes = [
  {
    label: localisation.t(`classes_for_drop_down.${Classes.Warrior}`),
    value: Classes.Warrior,
  },
  {
    label: localisation.t(`classes_for_drop_down.${Classes.Priest}`),
    value: Classes.Priest,
  },
  {
    label: localisation.t(`classes_for_drop_down.${Classes.Mage}`),
    value: Classes.Mage,
  },
  {
    label: localisation.t(`classes_for_drop_down.${Classes.Rogue}`),
    value: Classes.Rogue,
  },
  {
    label: localisation.t(`classes_for_drop_down.${Classes.Druid}`),
    value: Classes.Druid,
  },
  {
    label: localisation.t(`classes_for_drop_down.${Classes.Shaman}`),
    value: Classes.Shaman,
  },
  {
    label: localisation.t(`classes_for_drop_down.${Classes.DemonHunter}`),
    value: Classes.DemonHunter,
  },
  {
    label: localisation.t(`classes_for_drop_down.${Classes.Paladin}`),
    value: Classes.Paladin,
  },
  {
    label: localisation.t(`classes_for_drop_down.${Classes.Hunter}`),
    value: Classes.Hunter,
  },
  {
    label: localisation.t(`classes_for_drop_down.${Classes.Warlock}`),
    value: Classes.Warlock,
  },
  {
    label: localisation.t(`classes_for_drop_down.${Classes.default}`),
    value: Classes.default,
  },
];

const types = [
  {label: 'Minion', value: Types.Minion},
  {label: 'Spell', value: Types.Spell},
  {label: 'Hero', value: Types.Hero},
  {label: 'Weapon', value: Types.Weapon},
  {label: 'All', value: Types.default},
];

const rarity = [
  {label: 'Legendary', value: Rarity.Legendary},
  {label: 'Epic', value: Rarity.Epic},
  {label: 'Rare', value: Rarity.Rare},
  {label: 'Common', value: Rarity.Common},
  {label: 'All', value: Rarity.default},
];

const minionType = [
  {label: 'Demon', value: MinionType.Demon},
  {label: 'Dragon', value: MinionType.Dragon},
  {label: 'Murloc', value: MinionType.Murloc},
  {label: 'Pirate', value: MinionType.Pirate},
  {label: 'Totem', value: MinionType.Totem},
  {label: 'Beast', value: MinionType.Beast},
  {label: 'Elemental', value: MinionType.Elemental},
  {label: 'Mech', value: MinionType.Mech},
  {label: 'All', value: MinionType.default},
];

interface Props {
  height: number;
  onSelectClass: (classType: Classes) => void;
  onSelectType: (type: Types) => void;
  onSelectRarity: (rarity: Rarity) => void;
  onSelectMinionType: (minionType: MinionType) => void;
}

export const TypeDrawer: React.FC<Props> = ({
  height,
  onSelectClass,
  onSelectType,
  onSelectRarity,
  onSelectMinionType,
}: Props) => (
  <View style={{height}}>
    <DropDownPicker
      placeholder={localisation.t('drop_down_text.selectClass')}
      dropDownMaxHeight={height}
      style={styles.block}
      items={classes}
      containerStyle={styles.containerStyle}
      dropDownStyle={styles.dropDownStyle}
      onChangeItem={(item) => onSelectClass(item.value)}
    />

    <DropDownPicker
      placeholder={localisation.t('drop_down_text.selectType')}
      dropDownMaxHeight={height}
      style={styles.block}
      items={types}
      containerStyle={styles.containerStyle}
      dropDownStyle={styles.dropDownStyle}
      onChangeItem={(item) => onSelectType(item.value)}
    />

    <DropDownPicker
      placeholder={localisation.t('drop_down_text.selectRarity')}
      dropDownMaxHeight={height}
      style={styles.block}
      items={rarity}
      containerStyle={styles.containerStyle}
      dropDownStyle={styles.dropDownStyle}
      onChangeItem={(item) => onSelectRarity(item.value)}
    />

    <DropDownPicker
      placeholder={localisation.t('drop_down_text.selectMinionType')}
      dropDownMaxHeight={height}
      style={styles.block}
      items={minionType}
      containerStyle={styles.containerStyle}
      dropDownStyle={styles.dropDownStyle}
      onChangeItem={(item) => onSelectMinionType(item.value)}
    />
  </View>
);
