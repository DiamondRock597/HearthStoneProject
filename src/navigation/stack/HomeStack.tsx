import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens} from '../screens';
import {Home} from '../../screens/Home';
import {Discription} from '../../screens/Discription';

const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {fontSize: 23, color: 'white'},
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#807c74'},
    }}>
    <Stack.Screen name={RootScreens.Home} component={Home} />
    <Stack.Screen name={RootScreens.Discription} component={Discription} />
  </Stack.Navigator>
);
