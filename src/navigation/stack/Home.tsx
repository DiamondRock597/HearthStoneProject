import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RootScreens, RootStackParamList} from '../screens';
import {DrawerNavigation} from '../drawer/DrawerNavigation';
import {DrawerActions} from '@react-navigation/native';
import {MenuButton} from '../../components/MenuButton';
import {Discription} from '../../screens/Discription';

const Stack = createStackNavigator();

export const HomeStack: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {fontSize: 23, color: 'white'},
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#807c74'},
      headerTintColor: 'white',
    }}
    initialRouteName={RootScreens.Home}>
    <Stack.Screen
      name={RootScreens.Home}
      component={DrawerNavigation}
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
    />
    <Stack.Screen name={RootScreens.Discription} component={Discription} />
  </Stack.Navigator>
);
