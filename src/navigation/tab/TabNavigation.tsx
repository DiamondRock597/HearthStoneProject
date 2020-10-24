import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import {RootScreens} from '../screens';
import {Home} from '../../screens/Home';
import {Addition} from '../../screens/Addition';

const Tab = createBottomTabNavigator();

const tabIcon = (color: string) => ({tintColor: color, width: 40, height: 40});

export const TabNavigation = () => (
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
