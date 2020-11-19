import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {Dimensions, ScaledSize, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {StackNavigationProp} from '@react-navigation/stack';

import {styles} from '../styles/dropdown';
import {Languages, localisation} from '../localisation/localisation';
import {Stores} from '../stores/stores';
import {StoreOfUser} from '../stores/user';
import {StoreOfCards} from '../stores/cards';
import {RootScreens, RootStackParamList} from '../navigation/screens';

const {height}: ScaledSize = Dimensions.get('window');

const items = [
  {label: 'RU', value: Languages.RU},
  {label: 'EN', value: Languages.EN},
];

interface Props {
  user: StoreOfUser;
  cards: StoreOfCards;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Options>;
}

@inject(Stores.User, Stores.Cards)
@observer
export class Options extends React.Component<Props> {
  public get language() {
    return this.props.user.selectedLocale;
  }

  public render() {
    return (
      <View style={{...styles.container, height}}>
        <DropDownPicker
          style={styles.block}
          containerStyle={styles.containerStyle}
          dropDownStyle={styles.dropDownStyle}
          items={items}
          onChangeItem={this.handleChange}
          defaultValue={this.language}
        />
      </View>
    );
  }

  private handleChange: (obj: {value: Languages}) => void = ({
    value,
  }: {
    value: Languages;
  }) => {
    this.props.user.setLocale(value);
    this.props.cards.cleanCards();
    localisation.selectLanguage(value);
  };
}
