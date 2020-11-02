import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, ScaledSize} from 'react-native';
import {TabNavigation} from '../tab/TabNavigation';
import {inject, observer} from 'mobx-react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {TypeDrawer} from './Drawer';
import {RootScreens, RootStackParamList} from '../screens';
import {Stores} from '../../stores/stores';
import {CardStore} from '../../stores/cards';
import {
  Params,
  Classes,
  Types,
  Rarity,
  MinionType,
} from '../../models/card_filters';

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

  private handleSelectInputClass: (classType: Classes) => void = (
    classType,
  ) => {
    this.props.cards.setParams({class: classType});
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };

  private handleSelectInputType: (type: Types) => void = (type) => {
    this.props.cards.setParams({type});
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };

  private handleSelectInputRarity: (rarity: Rarity) => void = (rarity) => {
    this.props.cards.setParams({rarity});
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };

  private handleSelectInputMinionType: (minionType: MinionType) => void = (
    minionType,
  ) => {
    this.props.cards.setParams({minionType});
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };
}
