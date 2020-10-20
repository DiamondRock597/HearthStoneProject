import {observable, action, computed, makeObservable, runInAction} from 'mobx';
import {CardModel} from '../models/Card';

import {FetchAPI} from '../api/fetch_card';

export class CardStore {
  @observable public cards: Array<CardModel> = [];
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
      this.isLoading = true;
      const cards = await FetchAPI.fetchCards();

      this.cards = cards;
    } catch (error) {
    } finally {
      this.isLoading = false;
    }
  };
}
