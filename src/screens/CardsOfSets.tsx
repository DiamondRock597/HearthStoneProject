import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {inject, observer} from 'mobx-react';
import {
  View,
  ListRenderItemInfo,
  ActivityIndicator,
  Text,
  TextInput,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Card} from '@components/Card';
import {Card as CardModel} from '@models/card';
import {RootScreens, RootStackParamList} from '@utils/navigation/screens';
import {StoreOfSets} from '@stores/sets';
import {Stores} from '@stores/stores';
import {localisation} from '@localisation/localisation';

import {styles} from '../styles/description';

const sizeIcons = 50;

interface Props {
  sets: StoreOfSets;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.CardsOfSets>;
  route: RouteProp<RootStackParamList, RootScreens.CardsOfSets>;
}

@inject(Stores.Sets)
@observer
export class CardsOfSets extends React.Component<Props> {
  private get cardsHeaderComponent() {
    return (
      <View style={styles.inputBlock}>
        <TextInput
          placeholder={localisation.t('text_for_input')}
          style={styles.descriptionInput}
          onChangeText={this.handleChangeInput}
          value={this.props.sets.valueInput}
        />
      </View>
    );
  }

  private get cardsEmptyComponent() {
    if (this.props.sets.isLoading) {
      return <ActivityIndicator color="black" size={50} />;
    } else if (this.props.sets.error) {
      return <Icon size={sizeIcons} color="red" name="error" />;
    }

    return <Text>{localisation.t('cards_empty.NoCards')}</Text>;
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
          ListHeaderComponent={this.cardsHeaderComponent}
          ListEmptyComponent={this.cardsEmptyComponent}
          data={this.props.sets.cardsList}
          renderItem={this.renderItem}
          itemDimension={180}
          keyExtractor={this.keyExtractor}
          spacing={8}
          numColumns={2}
        />
      </View>
    );
  }

  private keyExtractor: (item: CardModel) => string = (item) =>
    `Card of collection - ${item.id}`;

  private renderItem = ({item}: ListRenderItemInfo<CardModel>) => (
    <Card item={item} onPress={this.handlePress} />
  );

  private handlePress: (card: CardModel) => void = (card) => {
    this.props.navigation.navigate(RootScreens.Description, {card});
  };

  private fetchCards: () => void = () => {
    const {id}: {id: number} = this.props.route.params;
    this.props.sets.fetchCards(id);
  };

  private handleChangeInput: (text: string) => void = (text) => {
    const {id}: {id: number} = this.props.route.params;
    this.props.sets.setSearchValue(text);
    this.props.sets.cleanCards();
    this.props.sets.fetchCards(id);
  };
}
