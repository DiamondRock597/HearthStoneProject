import {observable, makeObservable} from 'mobx';
import {HeartStoneAPI} from '../api/CardAPI';
import {Set as SetDTO} from '../dto/set';

export class SetsStore {
  @observable public sets: Array<SetDTO> = [];

  public SetsHTTP: HeartStoneAPI;

  public constructor(http: HeartStoneAPI) {
    this.SetsHTTP = http;
    makeObservable(this);
  }

  public getSets: () => void = () => {
    this.SetsHTTP.getSets();
  };
}
