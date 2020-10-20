import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'mobx-react';
import {MainNavigation} from './src/navigation/MainNavigation';
import {createRootStore, Stores} from './src/stores/stores';

export class App extends React.Component {
  public render() {
    const rootStore = createRootStore();
    return (
      <Provider {...rootStore}>
        <MainNavigation />
      </Provider>
    );
  }
}
