import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens} from '../screens';
import {Addition} from 'features/additions/Addition';
import {localisation} from '@localisation/Localisation';

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
      name={RootScreens.Addition}
      component={Addition}
      options={{
        title: localisation.t(`header_screens.${RootScreens.Addition}`),
      }}
    />
  </Stack.Navigator>
);