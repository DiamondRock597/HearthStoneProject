import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HTMLView from 'react-native-htmlview';

import {RootScreens, RootStackParamList} from '../navigation/screens';
import {Card as CardModel} from '../models/card';
import {icons, Characteristic} from '../icons/icons';

import {styles} from '../styles/discription';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Discription>;
  route: RouteProp<RootStackParamList, RootScreens.Discription>;
}

export const Discription: React.FC<Props> = ({route}: Props) => {
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
            <View style={styles.block}>
              <View style={styles.textBlockWithIcon}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: icons.discription[Characteristic.Name],
                  }}
                />
                <Text style={styles.title}>Name:</Text>
              </View>
              <Text style={styles.answer} numberOfLines={2}>
                {card.name}
              </Text>
            </View>

            {card.manaCost !== undefined ? (
              <View style={styles.block}>
                <View style={styles.textBlockWithIcon}>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: icons.discription[Characteristic.Manacost],
                    }}
                  />
                  <Text style={styles.title}>Manacost:</Text>
                  <Text style={styles.answer}>{card.manaCost}</Text>
                </View>
              </View>
            ) : null}

            {card.attack ? (
              <View style={styles.block}>
                <View style={styles.textBlockWithIcon}>
                  <Icon name={'sword'} size={18} />
                  <Text style={styles.title}>Attack:</Text>
                  <Text style={styles.answer}>{card.attack}</Text>
                </View>
              </View>
            ) : null}

            {card.health ? (
              <View style={styles.block}>
                <View style={styles.textBlockWithIcon}>
                  <Icon name={'heart'} size={18} color={'red'} />
                  <Text style={styles.title}>Health:</Text>
                  <Text style={styles.answer}>{card.health}</Text>
                </View>
              </View>
            ) : null}

            {card.durability ? (
              <View style={styles.block}>
                <View style={styles.textBlockWithIcon}>
                  <Icon name={'shield'} size={18} color={'gray'} />
                  <Text style={styles.title}>Durability:</Text>
                  <Text style={styles.answer}>{card.durability}</Text>
                </View>
              </View>
            ) : null}
          </View>
        </View>
      </View>
      <Text style={styles.headerDiscr}>{card.name}</Text>
      <View style={styles.discription}>
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