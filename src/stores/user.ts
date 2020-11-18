import {action, computed, makeObservable, observable} from 'mobx';
import {persist} from 'mobx-persist';
import {HeartStoneAPI} from '../api/CardAPI';
import {Languages} from '../localisation/localisation';

export interface StoreOfUser {
  selectedLocale: Languages;

  onLoad: () => void;

  setLocale: (locale: Languages) => void;
  dispose: () => void;
}

export class UserStore implements StoreOfUser {
  @persist @observable public locale: Languages = Languages.EN;

  private http: HeartStoneAPI;

  @computed public get selectedLocale() {
    return this.locale;
  }

  public constructor(http: HeartStoneAPI) {
    makeObservable(this);
    this.http = http;
  }

  @action.bound
  public onLoad: () => void = () => this.setupParams();

  @action.bound
  public setLocale: (locale: Languages) => void = (locale) => {
    this.locale = locale;
    this.setupParams();
  };

  @action.bound public dispose = () => {
    this.locale = '';
    //this.http.cleanCardAPI();
  };

  private setupParams: () => void = () => {
    //Нельзя на прямою обращатся к http
    this.http.addParams({locale: this.locale});
  };
}
