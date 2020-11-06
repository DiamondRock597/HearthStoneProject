import {inject, observer} from 'mobx-react';
import React from 'react';
import {View, Text} from 'react-native';
import {Stores} from '../stores/stores';

@inject(Stores.Sets)
@observer
export class Addition extends React.Component {
  public componentDidMount() {
    this.props.sets.getSets();
  }
  public render() {
    return (
      <View>
        <Text>132</Text>
      </View>
    );
  }
}
