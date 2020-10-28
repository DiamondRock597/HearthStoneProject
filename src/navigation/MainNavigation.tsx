import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens} from './screens';
import {DrawerNavigation} from './drawer/DrawerNavigation';
import {Discription} from '../screens/Discription';

const Stack = createStackNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {fontSize: 23, color: 'white'},
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#807c74'},
        headerTintColor: 'white',
      }}
      initialRouteName={RootScreens.Home}>
      <Stack.Screen name={RootScreens.Home} component={DrawerNavigation} />
      <Stack.Screen name={RootScreens.Discription} component={Discription} />
    </Stack.Navigator>
  </NavigationContainer>
);
