import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'mobx-react';

import {MainNavigation} from './src/navigation/MainNavigation';
import {createRootStore, RootStore} from './src/stores/stores';

export class App extends React.Component {
  private rootStore: RootStore = createRootStore();

  public render() {
    return (
      <Provider {...this.rootStore}>
        <MainNavigation />
      </Provider>
    );
  }
}
