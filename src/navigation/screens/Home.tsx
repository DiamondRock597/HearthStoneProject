import React from 'react';
import {View, Text, Button} from 'react-native';
import {observer, inject} from 'mobx-react';
import {Stores} from '../../stores/stores';
import {toJS} from 'mobx';
import {TextInput} from 'react-native-gesture-handler';

@inject(Stores.Cards)
@observer
export class Home extends React.Component {
  public componentDidMount() {
    this.props.cards.fetchCards();
  }
  public render() {
    return (
      <View>
        <View>
          <TextInput style={{borderColor: 'black', borderWidth: 2}} />
        </View>
      </View>
    );
  }
}
