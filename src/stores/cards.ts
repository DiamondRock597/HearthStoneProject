import {observable, action, computed, makeObservable, runInAction} from 'mobx';
import {CardModel} from '../models/Card';

import {FetchAPI} from '../api/fetch_card';

export class CardStore {
  @observable public cards: Array<CardModel> = [];
  @observable public error: boolean = false;
  public constructor() {
    makeObservable(this);
  }
  @computed public get getCards() {
    return this.cards;
  }
  @action.bound public fetchCards: () => void = async () => {
    try {
      const res = await fetch('https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=USQRpamHK5mzxHOX2zv3R4Qj62vGAFIHb8');
      const data = await res.json();
      const cards = await data.cards;

      runInAction(async () => {
        this.cards = cards;
      });
    } catch (error) {
      console.log(error);
    }
  };
}
