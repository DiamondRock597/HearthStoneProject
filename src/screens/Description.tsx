import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import HTMLView from 'react-native-htmlview';

import {RootScreens, RootStackParamList} from '../navigation/screens';
import {Card as CardModel} from '../models/card';
import {
  DescriptionValue,
  DescriptionValues,
} from '../components/DescriptionValue';

import {styles} from '../styles/description';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Description>;
  route: RouteProp<RootStackParamList, RootScreens.Description>;
}

export const Description: React.FC<Props> = ({route}: Props) => {
  const {card}: {card: CardModel} = route.params;
  const discr: string = `<p> ${card.text}</p>`;

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.imageBlock}>
          <View style={styles.image}>
            <AutoHeightImage
              width={225}
              source={{
                uri: card.img,
              }}
            />
          </View>
          <View style={styles.textBlock}>
            <DescriptionValue
              valueType={DescriptionValues.Name}
              value={card.name}
            />

            {card.manaCost !== undefined ? (
              <DescriptionValue
                valueType={DescriptionValues.Manacost}
                value={card.manaCost}
              />
            ) : null}

            {card.attack ? (
              <DescriptionValue
                valueType={DescriptionValues.Attack}
                value={card.attack}
              />
            ) : null}

            {card.health ? (
              <DescriptionValue
                valueType={DescriptionValues.Health}
                value={card.health}
              />
            ) : null}

            {card.durability ? (
              <DescriptionValue
                valueType={DescriptionValues.Durability}
                value={card.durability}
              />
            ) : null}
          </View>
        </View>
      </View>
      <Text style={styles.headerDiscr}>{card.name}</Text>
      <View style={styles.description}>
        <HTMLView value={discr} stylesheet={stylesHTML} />
      </View>
    </ScrollView>
  );
};

const stylesHTML = StyleSheet.create({
  b: {
    fontSize: 30,
    fontWeight: '700',
  },
  p: {
    fontSize: 25,
    textAlign: 'center',
  },
});
