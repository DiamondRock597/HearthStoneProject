import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootScreens} from '../screens';
import {Options} from '../../screens/Options';

const Stack = createStackNavigator();

export const OptionsScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {fontSize: 23, color: 'white'},
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#807c74'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen name={RootScreens.Options} component={Options} />
    </Stack.Navigator>
  );
};
