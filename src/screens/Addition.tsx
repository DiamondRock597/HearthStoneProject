import {inject, observer} from 'mobx-react';
import React from 'react';
import {View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {RootScreens, RootStackParamList} from '../navigation/screens';
import {StackNavigationProp} from '@react-navigation/stack';

import {SetsStore} from '../stores/sets';
import {Stores} from '../stores/stores';
import {Set} from '../components/Set';
import {SetModel} from '../models/set';

import {styles} from '../styles/addition';

interface Props {
  sets: SetsStore;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Addition>;
}

@inject(Stores.Sets)
@observer
export class Addition extends React.Component<Props> {
  public componentDidMount() {
    this.props.sets.getSets();
  }

  public render() {
    return (
      <View style={styles.background}>
        <FlatGrid
          data={this.props.sets.sets}
          renderItem={({item}: {item: SetModel}) => (
            <Set onPress={this.handlePress} item={item} />
          )}
          itemDimension={400}
          spacing={10}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }

  private handlePress: (item: SetModel) => void = (item) => {
    this.props.navigation.navigate(RootScreens.DiscriptionSets, {item});
  };
}
