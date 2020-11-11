import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {inject, observer} from 'mobx-react';
import {View, ListRenderItemInfo} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import {Card} from '../components/Card';
import {Card as CardModel} from '../models/card';
import {RootScreens, RootStackParamList} from '../navigation/screens';
import {StoreOfSets} from '../stores/sets';
import {Stores} from '../stores/stores';

interface Props {
  sets: StoreOfSets;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.CardsOfSets>;
  route: RouteProp<RootStackParamList, RootScreens.CardsOfSets>;
}

@inject(Stores.Sets)
@observer
export class CardsOfSets extends React.Component<Props> {
  public componentDidMount() {
    const {name}: {name: string} = this.props.route.params;
    this.props.sets.fetchCards(name);
  }

  public render() {
    return (
      <View>
        <FlatGrid
          data={this.props.sets.cardsList}
          renderItem={this.renderItem}
          itemDimension={192}
          keyExtractor={(item) => item.id.toString()}
          spacing={8}
        />
      </View>
    );
  }

  private renderItem = ({item}: ListRenderItemInfo<CardModel>) => (
    <Card item={item} onPress={this.handlePress} />
  );

  private handlePress: (card: CardModel) => void = (card) => {
    this.props.navigation.navigate(RootScreens.Discription, {card});
  };
}
