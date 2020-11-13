import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import {RootScreens} from '../screens';
import {HomeScreen as HomeStack} from '../stack/Home';
import {AdditionScreen as AdditionStack} from '../stack/Addition';
import {icons} from '../../icons/icons';

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
      component={HomeStack}
      options={{
        tabBarIcon: (props) => (
          <Image
            style={tabIcon(props.color)}
            source={{
              uri: icons.menu[RootScreens.Home],
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name={RootScreens.Addition}
      component={AdditionStack}
      options={{
        tabBarIcon: (props) => (
          <Image
            style={tabIcon(props.color)}
            source={{
              uri: icons.menu[RootScreens.Addition],
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
