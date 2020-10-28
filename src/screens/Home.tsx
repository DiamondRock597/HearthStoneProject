import React from 'react';
import {
  View,
  ActivityIndicator,
  TextInput,
  Text,
  ListRenderItemInfo,
} from 'react-native';
import {observer, inject} from 'mobx-react';
import {FlatGrid} from 'react-native-super-grid';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {Stores} from '../stores/stores';
import {RootScreens, RootStackParamList} from '../navigation/screens';
import {CardStore} from '../stores/cards';
import {CardModel} from '../models/Card';
import {Card} from '../components/Card';

import {styles} from '../styles/home';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  route: RouteProp<RootStackParamList, RootScreens.Home>;
  cards: CardStore;
}

interface State {
  valueInput: string;
  page: number;
}

@inject(Stores.Cards)
@observer
export class Home extends React.Component<Props, State> {
  public state: State = {
    valueInput: '',
    page: 1,
  };

  private get cardsHeaderComponent() {
    return (
      <View style={styles.inputBlock}>
        <TextInput
          placeholder="Enter card name"
          style={styles.homeInput}
          onChangeText={this.handleChangeInput}
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
          renderItem={({item}: ListRenderItemInfo<CardModel>) => (
            <Card item={item} navigation={this.props.navigation} />
          )}
          itemDimension={192}
          keyExtractor={(item) => item.id.toString()}
          spacing={8}
        />
      </View>
    );
  }

  private handleChangeInput: (text: string) => void = (text) => {
    this.setState({valueInput: text});
    this.props.cards.cleanCards();

    this.props.cards.fetchCards(
      text.toLowerCase(),
      this.props.route.params.paramsAtribute,
    );
  };

  private fetchCards: () => void = () => {
    this.props.cards.fetchCards(
      this.state.valueInput,
      this.props.route.params.paramsAtribute,
    );
  };
}
