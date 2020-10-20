import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootSreens} from './screens';
import {Addition} from './screens/Addition';
import {HomeStack} from './stack/HomeStack';
import {Image} from 'react-native';
const Tab = createBottomTabNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 15, color: 'white'}, tabStyle: {backgroundColor: '#4d4c3f'}}}>
      <Tab.Screen
        name={RootSreens.Home}
        component={HomeStack}
        options={{
          tabBarIcon: () => (
            <Image
              style={{width: 30, height: 30, tintColor: 'white'}}
              source={{uri: 'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_HOF.png'}}
            />
          ),
        }}
      />
      <Tab.Screen name={RootSreens.Addition} component={Addition} />
    </Tab.Navigator>
  </NavigationContainer>
);
