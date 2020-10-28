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
    runInAction(() => {
      this.cards = [];
      this.page = 1;
    });
  };

  @action.bound public fetchCards: (
    text?: string,
    paramsAtribute?: string,
  ) => void = async (text, paramsAtribute) => {
    try {
      if (this.isLoading) {
        return;
      }
      runInAction(() => {
        this.isLoading = true;
      });

      const {cards, page} = await CardsAPI.fetchCards({
        text,
        paramsAtribute,
        page: this.page,
      });

      runInAction(() => {
        this.cards = [...this.cards, ...cards];
        this.page = page + pageNumber;
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
