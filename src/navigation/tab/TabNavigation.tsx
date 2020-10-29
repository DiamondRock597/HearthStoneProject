import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import {RootScreens, RootStackParamList} from '../screens';
import {Home} from '../../screens/Home';
import {Addition} from '../../screens/Addition';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const tabIcon = (color: string) => ({tintColor: color, width: 40, height: 40});

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  route: RouteProp<RootStackParamList, RootScreens.Home>;
}

export const TabNavigation: React.FC<Props> = ({route}: Props) => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      labelStyle: {fontSize: 15},
      activeTintColor: '#ebcf96',
      inactiveTintColor: 'white',
      tabStyle: {backgroundColor: '#4d4c3f'},
    }}>
    <Tab.Screen
      name={RootScreens.Home}
      component={Home}
      options={{
        tabBarIcon: (props) => (
          <Image
            style={tabIcon(props.color)}
            source={{
              uri:
                'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_HOF.png',
            }}
          />
        ),
      }}
    />

    <Tab.Screen
      name={RootScreens.Addition}
      component={Addition}
      options={{
        tabBarIcon: (props) => (
          <Image
            style={tabIcon(props.color)}
            source={{
              uri:
                'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_Scholomancy.png',
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
