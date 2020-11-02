import {observable, action, computed, makeObservable, toJS} from 'mobx';

import {CardsAPI} from '../api/CardAPI';
import {CardModel} from '../models/Card';
import {
  Params,
  Classes,
  Types,
  Rarity,
  MinionType,
} from '../models/card_filters';

const pageNumber: number = 1;

export const defaultParams: Params = {
  class: Classes.default,
  type: Types.default,
  rarity: Rarity.default,
  minionType: MinionType.default,
};

export class CardStore {
  @observable public cards: Array<CardModel> = [];
  @observable public error: boolean = false;
  @observable public isLoading: boolean = false;
  @observable public params: Params = defaultParams;
  @observable public valueInput: string = '';

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

  @action.bound public setValue: (text: string) => void = (text) => {
    this.valueInput = text;
  };

  @action.bound public setParams: (params: Params) => void = (params) => {
    this.params = {...this.params, ...params};
  };

  @action.bound public fetchCards: () => void = async () => {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;

      const {cards, page} = await CardsAPI.fetchCards({
        text: this.valueInput,
        page: this.page,
        params: this.params,
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
