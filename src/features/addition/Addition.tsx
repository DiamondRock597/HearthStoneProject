import {inject, observer} from 'mobx-react';
import React from 'react';
import {
  Dimensions,
  ListRenderItemInfo,
  RefreshControl,
  ScaledSize,
  View,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootScreens, RootStackParamList} from '@utils/navigation/screens';
import {SetsStore} from '@stores/sets';
import {Stores} from '@stores/stores';
import {Set} from '@components/Set';
import {SetModel} from '@models/set';

import {styles} from './styles/addition';

const {width}: ScaledSize = Dimensions.get('screen');
const paddingForImage = 10;

interface Props {
  sets: SetsStore;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Addition>;
}

interface State {
  refreshing: boolean;
}

@inject(Stores.Sets)
@observer
export class Addition extends React.Component<Props, State> {
  public state: State = {
    refreshing: false,
  };

  public componentDidMount() {
    this.props.sets.getSets();
  }

  private get refreshControl() {
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.props.sets.cleanSets();
          this.props.sets.getSets();
        }}
      />
    );
  }

  public render() {
    return (
      <View style={styles.background}>
        <FlatGrid
          data={this.props.sets.sets}
          renderItem={this.renderItem}
          itemDimension={width - paddingForImage}
          spacing={10}
          keyExtractor={this.keyExtractor}
          refreshControl={this.refreshControl}
        />
      </View>
    );
  }

  private keyExtractor(item: SetModel) {
    return `Set - ${item.id}`;
  }

  private renderItem = ({item}: ListRenderItemInfo<SetModel>) => (
    <Set onPress={this.handlePress} item={item} />
  );

  private handlePress: (item: SetModel) => void = (item) => {
    this.props.navigation.navigate(RootScreens.DescriptionSets, {item});
  };
}
