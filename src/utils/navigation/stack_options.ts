import {RootScreens} from './screens';

import {StackNavigationOptions} from '@react-navigation/stack';

export const mainStackOptions: StackNavigationOptions = {
  headerTitleStyle: {fontSize: 20, color: 'white'},
  headerTitleAlign: 'center',
  headerStyle: {backgroundColor: '#807c74'},
  headerTintColor: 'white',
};

export const optionsMap: {[screen in RootScreens]: StackNavigationOptions} = {
  [RootScreens.Home]: {
    headerShown: false,
  },
};
