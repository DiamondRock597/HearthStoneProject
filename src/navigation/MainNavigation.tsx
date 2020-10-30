import React from 'react';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {RootScreens, RootStackParamList} from './screens';
import {DrawerNavigation} from './drawer/DrawerNavigation';
import {Discription} from '../screens/Discription';
import {MenuButton} from '../components/MenuButton';

const Stack = createStackNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {fontSize: 23, color: 'white'},
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#807c74'},
        headerTintColor: 'white',
        // headerLeft: (props) => (
        //   <Button title="123" onPress={() => console.log({props})} />
        // ),
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
              handleOpen={() =>
                navigation.dispatch(DrawerActions.toggleDrawer())
              }
            />
          ),
        })}
      />
      <Stack.Screen name={RootScreens.Discription} component={Discription} />
    </Stack.Navigator>
  </NavigationContainer>
);
