import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {observer, inject} from 'mobx-react';
import {Stores} from '../../stores/stores';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from '../../styles/styles';
import AutoHeightImage from 'react-native-auto-height-image';
import {FlatGrid} from 'react-native-super-grid';

@inject(Stores.Cards)
@observer
export class Home extends React.Component {
  private get cardsHeaderComponent() {
    return (
      <View>
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
      <View>
        <View>
          <FlatGrid
            ListEmptyComponent={this.cardsEmptyComponent}
            ListHeaderComponent={this.cardsHeaderComponent}
            data={this.props.cards.cardsList}
            renderItem={({item}) => <AutoHeightImage width={200} source={{uri: item.image}} />}
            itemDimension={150}
            spacing={10}
          />
        </View>
      </View>
    );
  }
}
