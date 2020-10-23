import {observable, action, computed, makeObservable, runInAction} from 'mobx';
import {CardModel} from '../models/Card';
import {FetchAPI} from '../api/fetch_card';

export class CardStore {
  @observable public cards: Array<object> = [];
  @observable public error: boolean = false;
  @observable public isLoading: boolean = false;
  public constructor() {
    makeObservable(this);
  }
  @computed public get cardsList() {
    return [...this.cards];
  }
  @action.bound public fetchCards: () => void = async () => {
    try {
      const cards = await FetchAPI.fetchCards();
      runInAction(() => {
        this.cards = cards;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.error = true;
      });
    } finally {
      this.isLoading = false;
    }
  };
}
