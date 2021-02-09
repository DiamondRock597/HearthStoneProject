import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {RootScreens, RootStackParamList} from './screens';
import {TabNavigation} from './tab/TabNavigation';
import {Description} from '../../screens/Description';
import {DescriptionSets} from '../../screens/DescriptionSets';
import {CardsOfSets} from '../../screens/CardsOfSets';
import {localisation} from '../../localisation/localisation';
import {mainStackOptions, optionsMap} from './stack_options';

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
      screenOptions={mainStackOptions}>
      <Stack.Screen
        name={RootScreens.Home}
        component={TabNavigation}
        options={optionsMap[RootScreens.Home]}
      />
      <Stack.Screen
        name={RootScreens.Description}
        component={Description}
        options={({
          route,
        }: {
          route: RouteProp<RootStackParamList, RootScreens.Description>;
        }) => ({
          headerTitle: localisation.t(`header_screens.${route.name}`),
        })}
      />

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
        }) => ({
          headerTitle: route.params.name,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
