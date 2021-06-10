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

import {RootScreens, RootStackParamList} from '@utils/navigation/screens';
import {SetModel} from '@models/set';
import {localisation} from 'localisation/Localisation';

import {styles} from '../styles/descriptionSets';

const {width}: ScaledSize = Dimensions.get('window');

interface Props {
  navigation: StackNavigationProp<
    RootStackParamList,
    RootScreens.DescriptionSets
  >;
  route: RouteProp<RootStackParamList, RootScreens.DescriptionSets>;
}

export class DescriptionSets extends React.Component<Props> {
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
            <Text style={styles.name}>
              {localisation.t('description.Name')}:{' '}
            </Text>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View style={styles.blockTitle}>
            <Text style={styles.name}>
              {localisation.t('description.Type')}:{' '}
            </Text>
            <Text style={styles.title}>{type}</Text>
          </View>
          <View style={styles.blockTitle}>
            <Text style={styles.name}>
              {localisation.t('description.ReleaseDate')}:{' '}
            </Text>
            <Text style={styles.title}>{releaseDate}</Text>
          </View>
        </View>
        <View style={styles.btn}>
          <Button
            title={localisation.t('button_cards_of_set')}
            onPress={() =>
              navigation.navigate(RootScreens.CardsOfSets, {
                id,
                name,
              })
            }
            color={'#4a967f'}
          />
        </View>
      </ScrollView>
    );
  }
}
