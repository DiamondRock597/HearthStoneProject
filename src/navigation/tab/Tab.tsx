import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootScreens} from '../screens';
import {HomeScreen as HomeStack} from '../stack/Home';
import {AdditionScreen as AdditionStack} from '../stack/Addition';
import {TabBarIcon} from './TabBarIcon';
import {OptionsScreen as OptionsStack} from '../stack/Options';
import {localisation} from '../../localisation/localisation';

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
      name={localisation.t(`screens.${RootScreens.Home}`)}
      component={HomeStack}
      options={{
        tabBarIcon: (props) => (
          <TabBarIcon iconsType={RootScreens.Home} color={props.color} />
        ),
      }}
    />
    <Tab.Screen
      name={localisation.t(`screens.${RootScreens.Addition}`)}
      component={AdditionStack}
      options={{
        tabBarIcon: (props) => (
          <TabBarIcon iconsType={RootScreens.Addition} color={props.color} />
        ),
      }}
    />
    <Tab.Screen
      name={localisation.t(`screens.${RootScreens.Options}`)}
      component={OptionsStack}
      options={{
        tabBarIcon: (props) => (
          <TabBarIcon iconsType={RootScreens.Options} color={props.color} />
        ),
      }}
    />
  </Tab.Navigator>
);
