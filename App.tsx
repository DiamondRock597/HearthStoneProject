import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'mobx-react';

import {MainNavigation} from './src/utils/navigation/MainNavigation';
import {
  createRootStore,
  MainStore,
  Stores,
  StoresMethods,
} from './src/stores/main_stores';
import {localisation} from './src/localisation/Localisation';

interface State {
  hydrated: boolean;
}

export class App extends React.Component<null, State> {
  public state: State = {
    hydrated: false,
  };

  private rootStore: MainStore = createRootStore();

  public async componentDidMount() {
    await this.rootStore[StoresMethods.LoadStores]();
    localisation.selectLanguage(this.rootStore[Stores.User].selectedLocale);
    this.setState({hydrated: true});
  }

  public render() {
    return this.state.hydrated ? (
      <Provider {...this.rootStore}>
        <MainNavigation />
      </Provider>
    ) : null;
  }
}
