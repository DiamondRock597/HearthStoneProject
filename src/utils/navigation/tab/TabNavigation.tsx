import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootScreens} from '../screens';
import {HomeScreen as HomeStack} from '../stack/Home';
import {AdditionScreen as AdditionStack} from '../stack/Addition';
import {TabBarIcon} from './TabBarIcon';
import {OptionsScreen as OptionsStack} from '../stack/Options';
import {localisation} from 'localisation/Localisation';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      labelStyle: {fontSize: 15},
      activeTintColor: '#ebcf96',
      inactiveTintColor: 'white',
      tabStyle: {backgroundColor: '#4d4c3f'},
    }}>
    <Tab.Screen
      name={RootScreens.Home}
      component={HomeStack}
      options={{
        tabBarLabel: localisation.t(`header_screens.${RootScreens.Home}`),
        tabBarIcon: ({color}: {color: string}) => (
          <TabBarIcon iconsType={RootScreens.Home} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name={RootScreens.Addition}
      component={AdditionStack}
      options={{
        tabBarLabel: localisation.t(`header_screens.${RootScreens.Addition}`),
        tabBarIcon: ({color}: {color: string}) => (
          <TabBarIcon iconsType={RootScreens.Addition} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={RootScreens.Options}
      component={OptionsStack}
      options={{
        tabBarLabel: localisation.t(`header_screens.${RootScreens.Options}`),
        tabBarIcon: ({color}: {color: string}) => (
          <TabBarIcon iconsType={RootScreens.Options} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
