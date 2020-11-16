import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';

import {RootScreens, RootStackParamList} from '../screens';
import {MenuButton} from '../../components/MenuButton';
import {DrawerOptions} from '../drawer/Options';

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
      options={({
        navigation,
      }: {
        navigation: StackNavigationProp<
          RootStackParamList,
          RootScreens.Options
        >;
      }) => ({
        headerLeft: () => (
          <MenuButton
            handleOpen={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          />
        ),
      })}
      name={RootScreens.Options}
      component={DrawerOptions}
    />
  </Stack.Navigator>
);
