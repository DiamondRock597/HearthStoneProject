import {observable, action, computed, makeObservable, toJS} from 'mobx';

import {CardsAPI, Params} from '../api/CardAPI';
import {HttpAPI} from '../api/http_api';

import {CardModel} from '../models/Card';
import {Classes, Types, Rarity, MinionType} from '../models/card_filters';

const pageNumber: number = 1;

interface SelectParam {
  type?: Types;
  class?: Classes;
  rarity?: Rarity;
  minionType?: MinionType;
}

export const defaultParams: Params = {
  class: Classes.default,
  type: Types.default,
  rarity: Rarity.default,
  minionType: MinionType.default,
  page: pageNumber,
};

export class CardStore {
  @observable public cards: Array<CardModel> = [];
  @observable public error: boolean = false;
  @observable public isLoading: boolean = false;
  @observable public params: Params = defaultParams;

  public valueInput: string = '';
  private page: number = pageNumber;
  private HeartstoneAPI: CardsAPI;

  public constructor(http: HttpAPI, params: Params) {
    makeObservable(this);
    this.HeartstoneAPI = new CardsAPI(http, params);
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

  @action.bound public setParams: (param: SelectParam) => void = (params) => {
    this.params = {
      ...this.params,
      ...params,
    };
  };

  @action.bound public fetchCards: () => void = async () => {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      const {cards} = await this.HeartstoneAPI.getCards({
        textFilter: this.valueInput,
        ...this.params,
        page: this.page,
      });
      console.log({cards: this.cards});

      this.cards = [...this.cards, ...cards];
      this.page = this.page + pageNumber;
    } catch (error) {
      this.error = true;
    } finally {
      this.isLoading = false;
    }
  };
}
