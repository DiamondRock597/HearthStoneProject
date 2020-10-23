import React from 'react';
import {View, ActivityIndicator, TextInput, FlatList, Text} from 'react-native';
import {observer, inject} from 'mobx-react';
import {FlatGrid} from 'react-native-super-grid';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {styles} from '../styles/styles';
import {Stores} from '../stores/stores';
import {RootScreens, RootStackParamList} from '../navigation/screens';
import {CardStore} from '../stores/cards';
import {CardModel} from '../models/Card';
import {Card} from '../components/Card';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  route: RouteProp<RootStackParamList, RootScreens.Home>;
  cards: CardStore;
}

export interface Item {
  item: CardModel;
}

@inject(Stores.Cards)
@observer
export class Home extends React.Component<Props> {
  private get cardsHeaderComponent() {
    return (
      <View style={styles.inputBlock}>
        <TextInput placeholder="Enter card name" style={styles.homeInput} />
      </View>
    );
  }
  private get cardsEmptyComponent() {
    return <ActivityIndicator color="black" size={50} />;
  }
  public componentDidMount() {
    this.props.cards.fetchCards();
  }

  public render() {
    return (
      <View style={styles.background}>
        <FlatGrid
          ListEmptyComponent={this.cardsEmptyComponent}
          ListHeaderComponent={this.cardsHeaderComponent}
          data={this.props.cards.cardsList}
          renderItem={({item}: Item) => <Card item={item} />}
          itemDimension={150}
          keyExtractor={item => item.id.toString()}
          spacing={10}
        />
      </View>
    );
  }
}
