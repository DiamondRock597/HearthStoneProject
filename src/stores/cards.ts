import {
  observable,
  action,
  computed,
  makeObservable,
  runInAction,
  toJS,
} from 'mobx';

import {CardsAPI, Params} from '../api/CardAPI';
import {CardModel} from '../models/Card';

export class CardStore {
  @observable public cards: Array<CardModel> = [];
  @observable public error: boolean = false;
  @observable public isLoading: boolean = false;

  public constructor() {
    makeObservable(this);
  }

  @computed public get cardsList() {
    return toJS(this.cards);
  }

  @action.bound public fetchCards: (params: Params) => void = async (
    params = {type: 'minion'},
  ) => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      const cards = await CardsAPI.fetchCards(params);

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
