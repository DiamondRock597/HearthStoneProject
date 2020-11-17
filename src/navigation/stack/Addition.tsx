import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens} from '../screens';
import {Addition} from '../../screens/Addition';
import {localisation} from '../../localisation/localisation';

const Stack = createStackNavigator();

export const AdditionScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {fontSize: 23, color: 'white'},
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#807c74'},
      headerTintColor: 'white',
    }}>
    <Stack.Screen
      name={localisation.t(`screens.${RootScreens.Addition}`)}
      component={Addition}
    />
  </Stack.Navigator>
);
