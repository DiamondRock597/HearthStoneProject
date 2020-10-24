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

import {styles} from '../styles/styles';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  route: RouteProp<RootStackParamList, RootScreens.Home>;
  cards: CardStore;
}

interface State {
  valueInput: string;
}

@inject(Stores.Cards)
@observer
export class Home extends React.Component<Props, State> {
  public state: State = {
    valueInput: '',
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
    console.log(this.props.navigation);

    const {valueInput}: State = this.state;
    const cards: Array<CardModel> = this.props.cards.cardsListForInput(
      valueInput,
    );

    // this.state.valueInput ? ;

    return (
      <View style={styles.background}>
        <FlatGrid
          ListEmptyComponent={this.cardsEmptyComponent}
          ListHeaderComponent={this.cardsHeaderComponent}
          data={cards}
          renderItem={this.renderItemCard}
          itemDimension={150}
          keyExtractor={(item) => item.id.toString()}
          spacing={10}
        />
      </View>
    );
  }

  private handleChangeInput: (text: string) => void = (text) => {
    this.setState({valueInput: text});
    this.props.cards.
  };

  private renderItemCard = ({item}: ListRenderItemInfo<CardModel>) => (
    <Card item={item} />
  );
}
