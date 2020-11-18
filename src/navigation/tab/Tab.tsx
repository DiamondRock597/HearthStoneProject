import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootScreens} from '../screens';
import {HomeScreen as HomeStack} from '../stack/Home';
import {AdditionScreen as AdditionStack} from '../stack/Addition';
import {TabBarIcon} from './TabBarIcon';
import {OptionsScreen as OptionsStack} from '../stack/Options';
import {localisation} from '../../localisation/localisation';
import {inject, observer} from 'mobx-react';
import {Stores} from '../../stores/stores';

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => (
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
        tabBarIcon: ({color}) => (
          <TabBarIcon iconsType={RootScreens.Home} color={color} />
        ),
      }}
    />
    {console.log(props.user.selectedLocale)}
    <Tab.Screen
      name={localisation.t(`screens.${RootScreens.Addition}`)}
      component={AdditionStack}
      options={{
        tabBarIcon: ({color}) => (
          <TabBarIcon iconsType={RootScreens.Addition} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={localisation.t(`screens.${RootScreens.Options}`)}
      component={OptionsStack}
      options={{
        tabBarIcon: ({color}) => (
          <TabBarIcon iconsType={RootScreens.Options} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export const TabNavigation = inject(Stores.User)(observer(TabNavigator));
