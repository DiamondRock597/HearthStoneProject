import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {inject, observer} from 'mobx-react';
import {View, ListRenderItemInfo, ActivityIndicator, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import {Card} from '../components/Card';
import {Card as CardModel} from '../models/card';
import {RootScreens, RootStackParamList} from '../navigation/screens';
import {StoreOfSets} from '../stores/sets';
import {Stores} from '../stores/stores';

import {styles} from '../styles/discription';

interface Props {
  sets: StoreOfSets;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.CardsOfSets>;
  route: RouteProp<RootStackParamList, RootScreens.CardsOfSets>;
}

@inject(Stores.Sets)
@observer
export class CardsOfSets extends React.Component<Props> {
  private get cardsEmptyComponent() {
    if (this.props.sets.isLoading) {
      return <ActivityIndicator color="black" size={50} />;
    } else if (this.props.sets.error) {
      return <Text>ERROR</Text>;
    }

    return <Text>There is no such card</Text>;
  }

  public componentDidMount() {
    this.props.sets.cleanCards();
    const {id}: {id: number} = this.props.route.params;
    this.props.sets.fetchCards(id);
  }

  public render() {
    return (
      <View style={styles.background}>
        <FlatGrid
          onEndReached={this.fetchCards}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={this.cardsEmptyComponent}
          data={this.props.sets.cardsList}
          renderItem={this.renderItem}
          itemDimension={192}
          keyExtractor={this.keyExtractor}
          spacing={8}
        />
      </View>
    );
  }

  private keyExtractor(item: CardModel) {
    return `Card of collection - ${item.id}`;
  }

  private renderItem = ({item}: ListRenderItemInfo<CardModel>) => (
    <Card item={item} onPress={this.handlePress} />
  );

  private handlePress: (card: CardModel) => void = (card) => {
    this.props.navigation.navigate(RootScreens.Discription, {card});
  };

  private fetchCards: () => void = () => {
    const {id}: {id: number} = this.props.route.params;
    this.props.sets.fetchCards(id);
  };
}
