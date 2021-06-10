import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';

import {RootScreens, RootStackParamList} from '../screens';
import {MenuButton} from 'components/menu_button/MenuButton';
import {DrawerNavigation} from '../drawer/DrawerNavigation';
import {localisation} from 'localisation/Localisation';

const Stack = createStackNavigator();

export const HomeScreen = () => (
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
        navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
      }) => ({
        title: localisation.t(`header_screens.${RootScreens.Home}`),
        headerLeft: () => (
          <MenuButton
            handleOpen={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          />
        ),
      })}
      name={RootScreens.Home}
      component={DrawerNavigation}
    />
  </Stack.Navigator>
);
