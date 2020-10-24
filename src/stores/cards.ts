import {observable, action, computed, makeObservable, runInAction} from 'mobx';

import Axios from 'axios';
import {FetchAPI} from '../api/fetch_card';
import {CardModel} from '../models/Card';

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
  @action.bound public cardsListForInput(text: string) {
    this.cards = this.cards.filter((item) => item.name.includes(text));
    if (this.cards.length) {
      return this.cards;
    } else {
      return [];
    }
  }
  @action.bound public fetchCards: () => void = async () => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });
      // const res = await Axios.get(
      //   'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&type=minion&access_token=USCmj7bJcgzsgjGSJQF4k28HpSgZ9pztju',
      // );
      const cards = await FetchAPI.fetchCards();
      runInAction(() => {
        this.cards = cards;
      });
    } catch (error) {
      runInAction(() => {
        this.error = true;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}
