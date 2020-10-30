import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, ScaledSize, Text} from 'react-native';
import {TabNavigation} from '../tab/TabNavigation';
import {inject, observer} from 'mobx-react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {TypeDrawer, itemPicker} from './Drawer';
import {RootScreens, RootStackParamList} from '../screens';
import {Stores} from '../../stores/stores';
import {CardStore} from '../../stores/cards';
import {Params, Classes} from '../../models/card_filters';

const Drawer = createDrawerNavigator();
const {height}: ScaledSize = Dimensions.get('window');
const paddingOfHeader = 92;

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  route: RouteProp<RootStackParamList, RootScreens.Home>;
  cards: CardStore;
}

interface State {
  params: Params;
}

export const defaultParams: Params = {
  class: Classes.DemonHunter,
};

@inject(Stores.Cards)
@observer
export class DrawerNavigation extends React.Component<Props, State> {
  public render() {
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          itemStyle: {
            backgroundColor: 'white',
            height: height - paddingOfHeader,
          },
        }}>
        <Drawer.Screen
          name={RootScreens.Home}
          component={TabNavigation}
          options={() => ({
            drawerLabel: () => (
              <TypeDrawer
                height={height - paddingOfHeader}
                onSelectClass={this.handleSelectInputClass}
                onSelectType={this.handleSelectInputType}
                onSelectRarity={this.handleSelectInputRarity}
                onSelectMinionType={this.handleSelectInputMinionType}
              />
            ),
          })}
        />
      </Drawer.Navigator>
    );
  }

  private handleSelectInputClass: (item: itemPicker) => void = (item) => {
    this.props.cards.setParams({class: item.value});
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };

  private handleSelectInputType: (item: itemPicker) => void = (item) => {
    this.props.cards.setParams({type: item.value});
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };

  private handleSelectInputRarity: (item: itemPicker) => void = (item) => {
    this.props.cards.setParams({rarity: item.value});
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };

  private handleSelectInputMinionType: (item: itemPicker) => void = (item) => {
    this.props.cards.setParams({minionType: item.value});
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };
}
