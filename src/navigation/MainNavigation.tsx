import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {RootScreens, RootStackParamList} from './screens';
import {TabNavigation} from './tab/Tab';
import {Discription} from '../screens/Description';
import {DiscriptionSets} from '../screens/DiscriptionSets';
import {CardsOfSets} from '../screens/CardsOfSets';

const Stack = createStackNavigator<RootStackParamList>();

interface PropsForOptions {
  navigation: StackNavigationProp<
    RootStackParamList,
    RootScreens.DescriptionSets
  >;
  route: RouteProp<RootStackParamList, RootScreens.DescriptionSets>;
}

export const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={RootScreens.Home}
      screenOptions={{
        headerTitleStyle: {fontSize: 23, color: 'white'},
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#807c74'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name={RootScreens.Home}
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name={RootScreens.Discription} component={Discription} />
      <Stack.Screen
        name={RootScreens.DiscriptionSets}
        component={DiscriptionSets}
        options={({route}: PropsForOptions) => ({
          headerTitle: route.params.item.name,
        })}
      />
      <Stack.Screen name={RootScreens.CardsOfSets} component={CardsOfSets} />
    </Stack.Navigator>
  </NavigationContainer>
);
