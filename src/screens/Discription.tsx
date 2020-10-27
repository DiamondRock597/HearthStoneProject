import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, Image, ScrollView} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {RootScreens, RootStackParamList} from '../navigation/screens';

import {styles} from '../styles/discription';
import {CardModel} from '../models/Card';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Discription>;
  route: RouteProp<RootStackParamList, RootScreens.Discription>;
}

export const Discription: React.FC<Props> = ({route}: Props) => {
  const {card}: {card: CardModel} = route.params;

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.imageBlock}>
          <AutoHeightImage
            width={225}
            source={{
              uri: card.img,
            }}
          />
          <View style={styles.textBlock}>
            <View style={styles.block}>
              <View style={styles.textBlockWithIcon}>
                <Image
                  style={styles.icon}
                  source={{
                    uri:
                      'https://raw.githubusercontent.com/HearthSim/hs-icons/master/PNG/Set_Classic.png',
                  }}
                />
                <Text style={styles.title}>Name:</Text>
              </View>
              <Text style={styles.answer}>{card.name}</Text>
            </View>

            {card.manaCost !== undefined ? (
              <View style={styles.block}>
                <View style={styles.textBlockWithIcon}>
                  <Image
                    style={styles.icon}
                    source={{
                      uri:
                        'https://www.pngjoy.com/pngl/371/6882643_crystal-icon-hearthstone-mana-png-transparent-png.png',
                    }}
                  />
                  <Text style={styles.title}>Manacost:</Text>
                  <Text style={styles.answer}>{card.manaCost}</Text>
                </View>
              </View>
            ) : (
              <></>
            )}

            {card.attack ? (
              <View style={styles.block}>
                <View style={styles.textBlockWithIcon}>
                  <Icon name={'sword'} size={18} />
                  <Text style={styles.title}>Attack:</Text>
                  <Text style={styles.answer}>{card.attack}</Text>
                </View>
              </View>
            ) : (
              <></>
            )}

            {card.health ? (
              <View style={styles.block}>
                <View style={styles.textBlockWithIcon}>
                  <Icon name={'heart'} size={18} color={'red'} />
                  <Text style={styles.title}>Health:</Text>
                  <Text style={styles.answer}>{card.health}</Text>
                </View>
              </View>
            ) : (
              <></>
            )}

            {card.durability ? (
              <View style={styles.block}>
                <View style={styles.textBlockWithIcon}>
                  <Icon name={'shield'} size={18} color={'gray'} />
                  <Text style={styles.title}>Durability:</Text>
                  <Text style={styles.answer}>{card.durability}</Text>
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
