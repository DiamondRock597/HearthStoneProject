import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {RootScreens, RootStackParamList} from './screens';
import {TabNavigation} from './tab/Tab';
import {Description} from '../screens/Description';
import {DescriptionSets} from '../screens/DescriptionSets';
import {CardsOfSets} from '../screens/CardsOfSets';
import {localisation} from '../localisation/localisation';

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
        headerTitleStyle: {fontSize: 20, color: 'white'},
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#807c74'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name={RootScreens.Home}
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name={RootScreens.Description} component={Description} />
      <Stack.Screen
        name={RootScreens.DescriptionSets}
        component={DescriptionSets}
        options={({route}: PropsForOptions) => ({
          headerTitle: route.params.item.name,
        })}
      />
      <Stack.Screen
        name={RootScreens.CardsOfSets}
        component={CardsOfSets}
        options={({
          route,
        }: {
          route: RouteProp<RootStackParamList, RootScreens.CardsOfSets>;
        }) => ({headerTitle: `Cards of ${route.params.name}`})}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
