import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens} from '../screens';
import {Options} from '../../../screens/Options';
import {localisation} from '../../../localisation/localisation';

const Stack = createStackNavigator();

export const OptionsScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {fontSize: 23, color: 'white'},
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#807c74'},
      headerTintColor: 'white',
    }}>
    <Stack.Screen
      name={RootScreens.Options}
      component={Options}
      options={{
        title: localisation.t(`header_screens.${RootScreens.Options}`),
      }}
    />
  </Stack.Navigator>
);
