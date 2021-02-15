import {action, computed, makeObservable, observable} from 'mobx';
import {persist} from 'mobx-persist';

import {HeartStoneAPI} from 'api/card_api';
import {Languages} from 'localisation/Localisation';
import {BaseStore} from './base_store';
import {PersistStore} from './persist_store';
import {injector} from 'utils/injector';
import {Configs} from 'config/configs';

export interface StoreOfUser extends PersistStore, BaseStore {
  selectedLocale: Languages;

  setLocale: (locale: Languages) => void;
}

export class UserStore implements StoreOfUser {
  @persist @observable public locale: Languages = Languages.EN;

  private cardsAPI: HeartStoneAPI = injector.get(Configs.HeartStoneAPI);

  @computed public get selectedLocale() {
    return this.locale;
  }

  public constructor() {
    makeObservable(this);
  }

  @action.bound
  public onLoad: () => void = () => this.setupParams();

  @action.bound
  public setLocale: (locale: Languages) => void = (locale) => {
    this.locale = locale;
    this.setupParams();
  };

  @action.bound
  public dispose: () => void = () => {
    this.locale = Languages.EN;
  };

  private setupParams: () => void = () => {
    this.cardsAPI.setupLocale(this.locale);
  };
}
