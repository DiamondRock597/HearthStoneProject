import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootSreens} from './screens';
import {Home} from './screens/Home';

const Tab = createBottomTabNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 20}}}>
      <Tab.Screen name={RootSreens.Home} component={Home} />
      <Tab.Screen name={RootSreens.Addition} component={Home} />
    </Tab.Navigator>
  </NavigationContainer>
);
