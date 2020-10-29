import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, ScaledSize} from 'react-native';
import {TabNavigation} from '../tab/TabNavigation';
import {inject, observer} from 'mobx-react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {TypeDrawer} from './ClassDrawer';
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
  public state: State = {
    params: defaultParams,
  };

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
          options={{
            drawerLabel: () => (
              <TypeDrawer
                height={height - paddingOfHeader}
                onSelect={this.handleSelectInput}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  private handleSelectInput: (cardClass: Classes) => void = (cardClass) => {
    this.setState({params: {class: cardClass}});
    this.props.cards.cleanCards();
    this.props.cards.fetchCards(cardClass);
  };
}
