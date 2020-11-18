import {action, computed, makeObservable, observable} from 'mobx';
import {persist} from 'mobx-persist';
import {act} from 'react-test-renderer';

import {HeartStoneAPI} from '../api/CardAPI';
import {Languages} from '../localisation/localisation';
import {BaseStore} from './base_store';
import {PersistStore} from './persist_store';

export interface StoreOfUser extends PersistStore, BaseStore {
  selectedLocale: Languages;

  setLocale: (locale: Languages) => void;
}

export class UserStore implements StoreOfUser {
  @persist @observable public locale: Languages = Languages.EN;

  private cardsAPI: HeartStoneAPI;

  @computed public get selectedLocale() {
    return this.locale;
  }

  public constructor(cardsAPI: HeartStoneAPI) {
    makeObservable(this);
    this.cardsAPI = cardsAPI;
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
    //Нельзя на прямою обращатся к http
  };
}
