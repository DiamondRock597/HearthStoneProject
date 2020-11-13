import React from 'react';
import {
  View,
  ActivityIndicator,
  TextInput,
  Text,
  ListRenderItemInfo,
  Dimensions,
  ScaledSize,
} from 'react-native';
import {observer, inject} from 'mobx-react';
import {FlatGrid} from 'react-native-super-grid';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {Stores} from '../stores/stores';
import {RootScreens, RootStackParamList} from '../navigation/screens';
import {StoreOfCards} from '../stores/cards';
import {Card as CardModel} from '../models/card';
import {Card} from '../components/Card';

import {styles} from '../styles/home';

const {width}: ScaledSize = Dimensions.get('window');
const paddingBetweenItems = 27;
const countItemsInRow = 2;

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  route: RouteProp<RootStackParamList, RootScreens.Home>;
  cards: StoreOfCards;
}

@inject(Stores.Cards)
@observer
export class Home extends React.Component<Props> {
  private get cardsHeaderComponent() {
    return (
      <View style={styles.inputBlock}>
        <TextInput
          placeholder="Enter card name"
          style={styles.homeInput}
          onChangeText={this.handleChangeInput}
          value={this.props.cards.valueInput}
        />
      </View>
    );
  }

  private get cardsEmptyComponent() {
    if (this.props.cards.isLoading) {
      return <ActivityIndicator color="black" size={50} />;
    } else if (this.props.cards.error) {
      return <Text>ERROR</Text>;
    }

    return <Text>There is no such card</Text>;
  }

  public componentDidMount() {
    this.props.cards.fetchCards();
  }

  public render() {
    return (
      <View style={styles.background}>
        <FlatGrid
          onEndReached={this.fetchCards}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={this.cardsEmptyComponent}
          ListHeaderComponent={this.cardsHeaderComponent}
          data={this.props.cards.cardsList}
          renderItem={this.renderItem}
          itemDimension={(width - paddingBetweenItems) / countItemsInRow}
          keyExtractor={this.keyExtractor}
          spacing={8}
        />
      </View>
    );
  }

  private keyExtractor = (item: CardModel) => `Card - ${item.id}`;

  private handleChangeInput: (text: string) => void = (text) => {
    this.props.cards.setSearchValue(text);
    this.props.cards.cleanCards();
    this.props.cards.fetchCards();
  };

  private fetchCards: () => void = () => {
    this.props.cards.fetchCards();
  };

  private handlePress: (card: CardModel) => void = (card) => {
    this.props.navigation.navigate(RootScreens.Discription, {card});
  };

  private renderItem = ({item}: ListRenderItemInfo<CardModel>) => (
    <Card item={item} onPress={this.handlePress} />
  );
}
