import {observable, makeObservable, action} from 'mobx';

import {HeartStoneAPI} from '../api/CardAPI';
import {SetModel} from '../models/set';

export class SetsStore {
  @observable public sets: Array<SetModel> = [];

  public SetsHTTP: HeartStoneAPI;

  public constructor(http: HeartStoneAPI) {
    this.SetsHTTP = http;
    makeObservable(this);
  }

  @action.bound public getSets: () => void = async () => {
    this.sets = await this.SetsHTTP.getSets();
  };
}
