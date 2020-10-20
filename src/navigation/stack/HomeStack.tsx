import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootSreens} from '../screens';
import {Home} from '../screens/Home';
const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {fontSize: 23, color: 'white'},
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#807c74'},
    }}>
    <Stack.Screen name={RootSreens.Home} component={Home} />
  </Stack.Navigator>
);
