import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootSreens} from './screens';
import {Addition} from './screens/Addition';
import {HomeStack} from './stack/HomeStack';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const tabIcon = (color: string) => ({tintColor: color, width: 40, height: 40});

export const MainNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: 'beside-icon',
        labelStyle: {fontSize: 15},
        activeTintColor: '#ebcf96',
        inactiveTintColor: 'white',
        tabStyle: {backgroundColor: '#4d4c3f'},
      }}>
      <Tab.Screen
        name={RootSreens.Home}
        component={HomeStack}
        options={{
          tabBarIcon: (props) => (
            <Image style={tabIcon(props.color)} source={{uri: 'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_HOF.png'}} />
          ),
        }}
      />
      <Tab.Screen
        name={RootSreens.Addition}
        component={Addition}
        options={{
          tabBarIcon: (props) => (
            <Image
              style={tabIcon(props.color)}
              source={{uri: 'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_Scholomancy.png'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
