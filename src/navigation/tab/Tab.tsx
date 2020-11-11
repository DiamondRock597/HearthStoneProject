import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

import {RootScreens, RootStackParamList} from '../screens';
import {DrawerNavigation} from '../drawer/DrawerNavigation';
import {Addition} from '../../screens/Addition';
import {MenuButton} from '../../components/MenuButton';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabIcon = (color: string) => ({tintColor: color, width: 40, height: 40});

const HomeScreen = () => (
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

const AdditionScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {fontSize: 23, color: 'white'},
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#807c74'},
      headerTintColor: 'white',
    }}>
    <Stack.Screen name={RootScreens.Addition} component={Addition} />
  </Stack.Navigator>
);

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
      component={HomeScreen}
      options={{
        tabBarIcon: (props) => (
          <Image
            style={tabIcon(props.color)}
            source={{
              uri:
                'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_HOF.png',
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name={RootScreens.Addition}
      component={AdditionScreen}
      options={{
        tabBarIcon: (props) => (
          <Image
            style={tabIcon(props.color)}
            source={{
              uri:
                'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_Scholomancy.png',
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
