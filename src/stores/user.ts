import {action, computed, makeObservable, observable} from 'mobx';
import {persist} from 'mobx-persist';

import {Languages} from 'localisation/Localisation';
import {BaseStore} from './base_store';
import {PersistStore} from './persist_store';
import {injector} from 'utils/injector';
import {Configs} from 'config/configs';
import {CardsServise} from 'api/cards';
import {Servises} from 'typings/servises';

export interface StoreOfUser extends PersistStore, BaseStore {
  selectedLocale: Languages;

  setLocale: (locale: Languages) => void;
}

export class UserStore implements StoreOfUser {
  @persist @observable public locale: Languages = Languages.EN;

  private cardsServise: CardsServise = injector.get(Servises.Cards);

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
    this.cardsServise.setupLocale(this.locale);
  };
}
