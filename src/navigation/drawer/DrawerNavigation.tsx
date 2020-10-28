import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {RootScreens} from '../screens';
import {TabNavigation} from '../tab/TabNavigation';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name={RootScreens.Home}
      component={TabNavigation}
      initialParams={{paramsAtribute: 'class'}}
    />
    <Drawer.Screen name={RootScreens.HomeClass} component={TabNavigation} />
  </Drawer.Navigator>
);
