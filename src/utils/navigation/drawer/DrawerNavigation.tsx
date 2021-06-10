import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, ScaledSize} from 'react-native';
import {inject, observer} from 'mobx-react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {TypeDrawer} from './DropDown';
import {RootScreens, RootStackParamList} from '../screens';
import {Params} from 'api/card_api';
import {Stores} from 'stores/main_stores';
import {CardStore} from '@stores/cards';
import {Classes, Types, Rarity, MinionType} from '@models/card_filters';
import {Home} from 'features/main/Home';

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

@inject(Stores.Cards)
@observer
export class DrawerNavigation extends React.Component<Props, State> {
  public render() {
    return (
      <Drawer.Navigator
        initialRouteName={RootScreens.Home}
        drawerContentOptions={{
          itemStyle: {
            backgroundColor: 'white',
            height: height - paddingOfHeader,
          },
        }}>
        <Drawer.Screen
          name={RootScreens.Home}
          component={Home}
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
    this.props.cards.setClass(classType);
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };

  private handleSelectInputType: (type: Types) => void = (type) => {
    this.props.cards.setType(type);
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };

  private handleSelectInputRarity: (rarity: Rarity) => void = (rarity) => {
    this.props.cards.setRarity(rarity);
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };

  private handleSelectInputMinionType: (minionType: MinionType) => void = (
    minionType,
  ) => {
    this.props.cards.setMinionType(minionType);
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };
}
