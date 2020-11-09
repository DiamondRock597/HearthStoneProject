import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, ScaledSize, ScrollView, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import {RootScreens, RootStackParamList} from '../navigation/screens';
import {styles} from '../styles/discriptiomSets';

const {height, width}: ScaledSize = Dimensions.get('window');

interface Props {
  navigation: StackNavigationProp<
    RootStackParamList,
    RootScreens.DiscriptionSets
  >;
  route: RouteProp<RootStackParamList, RootScreens.DiscriptionSets>;
}

export const DiscriptionSets: React.FC<Props> = ({
  route,
  navigation,
}: Props) => {
  navigation.setOptions({title: route.params.item.name});
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <AutoHeightImage
          width={width}
          source={{uri: route.params.item.image}}
        />
      </View>
    </ScrollView>
  );
};
