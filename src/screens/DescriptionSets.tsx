import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Button,
  Dimensions,
  ScaledSize,
  ScrollView,
  Text,
  View,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import {RootScreens, RootStackParamList} from '../navigation/screens';
import {SetModel} from '../models/set';

import {styles} from '../styles/discriptiomSets';

const {width}: ScaledSize = Dimensions.get('window');

interface Props {
  navigation: StackNavigationProp<
    RootStackParamList,
    RootScreens.DiscriptionSets
  >;
  route: RouteProp<RootStackParamList, RootScreens.DiscriptionSets>;
}

export class DiscriptionSets extends React.Component<Props> {
  public render() {
    const {navigation}: Props = this.props;
    const {
      id,
      name,
      type,
      image,
      releaseDate,
    }: SetModel = this.props.route.params.item;

    return (
      <ScrollView contentContainerStyle={styles.background}>
        <View style={styles.container}>
          <View>
            <AutoHeightImage width={width} source={{uri: image}} />
          </View>
          <View style={styles.blockTitle}>
            <Text style={styles.name}>Name: </Text>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View style={styles.blockTitle}>
            <Text style={styles.name}>Type: </Text>
            <Text style={styles.title}>{type}</Text>
          </View>
          <View style={styles.blockTitle}>
            <Text style={styles.name}>Release Date: </Text>
            <Text style={styles.title}>{releaseDate}</Text>
          </View>
        </View>
        <View style={styles.btn}>
          <Button
            title="Cards in this Set"
            onPress={() =>
              navigation.navigate(RootScreens.CardsOfSets, {
                id: id,
              })
            }
            color={'#4a967f'}
          />
        </View>
      </ScrollView>
    );
  }
}