import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootScreens} from '../screens';
import {Addition} from '../../screens/Addition';

import {DiscriptionSets} from '../../screens/DiscriptionSets';

const Stack = createStackNavigator();

export const AdditionStack: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {fontSize: 23, color: 'white'},
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#807c74'},
      headerTintColor: 'white',
    }}
    initialRouteName={RootScreens.Home}>
    <Stack.Screen name={RootScreens.Addition} component={Addition} />
    <Stack.Screen
      name={RootScreens.DiscriptionSets}
      component={DiscriptionSets}
    />
  </Stack.Navigator>
);
