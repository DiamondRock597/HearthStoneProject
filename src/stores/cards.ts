import {
  observable,
  action,
  computed,
  makeObservable,
  runInAction,
  toJS,
} from 'mobx';

import {CardsAPI} from '../api/CardAPI';
import {CardModel} from '../models/Card';

const pageNumber: number = 1;

export class CardStore {
  @observable public cards: Array<CardModel> = [];
  @observable public error: boolean = false;
  @observable public isLoading: boolean = false;
  private page: number = pageNumber;

  public constructor() {
    makeObservable(this);
  }

  @computed public get cardsList() {
    return toJS(this.cards);
  }

  @action.bound public cleanCards: () => void = () => {
    this.cards = [];
    this.page = 1;
  };

  @action.bound public fetchCards: (text?: string) => void = async (text) => {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;

      const {cards, page} = await CardsAPI.fetchCards({
        text,
        page: this.page,
      });

      this.cards = [...this.cards, ...cards];
      this.page = page + pageNumber;
    } catch (error) {
      this.error = true;
    } finally {
      this.isLoading = false;
    }
  };
}
