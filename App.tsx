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
import {injector} from 'utils/injector';
import {Http} from 'api/http_api';
import {Configs} from 'config/configs';
import {CardsAPI} from 'api/CardAPI';

interface State {
  hydrated: boolean;
}

const initLogic = async () => {
  const defaultParams = {
    access_token: 'US75Tcl39DbQFOCQp4xbaV6iv05g38Vx5o',
  };
  const http = new Http('https://us.api.blizzard.com/hearthstone/', {
    params: defaultParams,
  });

  const heartStoneAPI = new CardsAPI();

  injector.set(Configs.Http, http);
  injector.set(Configs.HeartStoneAPI, heartStoneAPI);
};

export class App extends React.Component<null, State> {
  public state: State = {
    hydrated: false,
  };

  private rootStore: MainStore = createRootStore();

  public async componentDidMount() {
    initLogic().then();
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
