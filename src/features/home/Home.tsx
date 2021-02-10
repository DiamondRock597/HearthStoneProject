import React from 'react';
import {
  View,
  ActivityIndicator,
  TextInput,
  Text,
  ListRenderItemInfo,
  Dimensions,
  ScaledSize,
  RefreshControl,
} from 'react-native';
import {observer, inject} from 'mobx-react';
import {FlatGrid} from 'react-native-super-grid';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Stores} from '@stores/stores';
import {RootScreens, RootStackParamList} from '@utils/navigation/screens';
import {StoreOfCards} from '@stores/cards';
import {Card as CardModel} from '@models/card';
import {Card} from '@components/Card';
import {localisation} from '@localisation/localisation';

import {styles} from './styles/home';

const {width}: ScaledSize = Dimensions.get('window');
const distanceBetweenItems = 32;
const countItemsInRow = 2;
const sizeIcons = 50;
const sideArountItem = 4;

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  route: RouteProp<RootStackParamList, RootScreens.Home>;
  cards: StoreOfCards;
}

interface State {
  refreshing: boolean;
}

@inject(Stores.Cards)
@observer
export class Home extends React.Component<Props, State> {
  public state: State = {
    refreshing: false,
  };

  private get cardsHeaderComponent() {
    return (
      <View style={styles.inputBlock}>
        <TextInput
          placeholder={localisation.t('text_for_input')}
          style={styles.homeInput}
          onChangeText={this.handleChangeInput}
          value={this.props.cards.valueInput}
        />
      </View>
    );
  }

  private get refreshControl() {
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.props.cards.cleanCards();
          this.props.cards.fetchCards();
        }}
      />
    );
  }

  private get cardsEmptyComponent() {
    if (this.props.cards.isLoading) {
      return <ActivityIndicator color="black" size={sizeIcons} />;
    } else if (this.props.cards.error) {
      return <Icon size={sizeIcons} color="red" name="error" />;
    }

    return <Text>{localisation.t('cards_empty.NoCards')}</Text>;
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
          itemDimension={(width - distanceBetweenItems) / countItemsInRow}
          keyExtractor={this.keyExtractor}
          spacing={distanceBetweenItems / sideArountItem}
          refreshControl={this.refreshControl}
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
    this.props.navigation.navigate(RootScreens.Description, {card});
  };

  private renderItem = ({item}: ListRenderItemInfo<CardModel>) => (
    <Card item={item} onPress={this.handlePress} />
  );
}
