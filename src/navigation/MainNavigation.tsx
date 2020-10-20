import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootSreens} from './screens';
import {Addition} from './screens/Addition';
import {HomeStack} from './stack/HomeStack';
const Tab = createBottomTabNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 20}}}>
      <Tab.Screen name={RootSreens.Home} component={HomeStack} />
      <Tab.Screen name={RootSreens.Addition} component={Addition} />
    </Tab.Navigator>
  </NavigationContainer>
);
