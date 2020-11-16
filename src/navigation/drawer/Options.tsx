import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DropDownPicker from 'react-native-dropdown-picker';
import {Dimensions, ScaledSize, View} from 'react-native';

import {RootScreens} from '../screens';
import {Options} from '../../screens/Options';

import {styles} from '../../styles/dropdown';
import {Languages, localisation} from '../../localisation/localisation';

const Drawer = createDrawerNavigator();

const {height}: ScaledSize = Dimensions.get('window');

const items = [
  {label: 'RU', value: Languages.RU},
  {label: 'EN', value: Languages.EN},
];

const paddingOfHeader = 92;

export class DrawerOptions extends React.Component {
  public render() {
    return (
      <Drawer.Navigator
        initialRouteName={RootScreens.Home}
        drawerContentOptions={{
          itemStyle: {
            backgroundColor: 'white',
            height: height - paddingOfHeader,
          },
        }}>
        <Drawer.Screen
          name={RootScreens.Options}
          component={Options}
          options={() => ({
            drawerLabel: () => (
              <View style={{height}}>
                <DropDownPicker
                  style={styles.block}
                  containerStyle={styles.containerStyle}
                  dropDownStyle={styles.dropDownStyle}
                  items={items}
                  onChangeItem={this.handleChange}
                />
              </View>
            ),
          })}
        />
      </Drawer.Navigator>
    );
  }

  private handleChange: (props: {value: Languages}) => void = ({
    value,
  }: {
    value: Languages;
  }) => {
    localisation.selectLanguage(value);
  };
}
