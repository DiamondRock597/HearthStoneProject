import {observable, action, computed, makeObservable, toJS} from 'mobx';

import {HeartStoneAPI} from '../api/CardAPI';

import {Card as CardModel} from '../models/card';
import {Classes, Types, Rarity, MinionType} from '../models/card_filters';

const pageNumber: number = 1;

export interface StoreOfCards {
  cardsList: Array<CardModel>;
  valueInput: string;
  error: boolean;
  isLoading: boolean;

  cleanCards: () => void;

  setSearchValue: (text: string) => void;
  setType: (type: Types) => void;
  setClass: (classType: Classes) => void;
  setMinionType: (minionType: MinionType) => void;
  setRarity: (rarity: Rarity) => void;

  dispose: () => void;

  fetchCards: () => void;

  onLoad: () => void;
}

export class CardStore implements StoreOfCards {
  @observable public cards: Array<CardModel> = [];
  @observable public error: boolean = false;
  @observable public isLoading: boolean = false;

  @observable public classType: Classes = Classes.default;
  @observable public type: Types = Types.default;
  @observable public rarity: Rarity = Rarity.default;
  @observable public minionType: MinionType = MinionType.default;
  public valueInput: string = '';

  private page: number = pageNumber;
  private HeartstoneAPI: HeartStoneAPI;

  @computed public get cardsList() {
    return toJS(this.cards);
  }

  public constructor(cardsAPI: HeartStoneAPI) {
    makeObservable(this);
    this.HeartstoneAPI = cardsAPI;
  }

  @action.bound public cleanCards: () => void = () => {
    this.cards = [];
    this.page = 1;
  };

  @action.bound public dispose: () => void = () => {
    this.cleanCards();
    this.error = false;
    this.isLoading = false;
    this.valueInput = '';

    this.rarity = Rarity.default;
    this.minionType = MinionType.default;
    this.type = Types.default;
    this.classType = Classes.default;
  };

  @action.bound
  public setSearchValue: (text: string) => void = (text) => {
    this.valueInput = text;
  };

  @action.bound
  public setType: (type: Types) => void = (type) => {
    this.type = type;
  };

  @action.bound
  public setClass: (classType: Classes) => void = (classType) => {
    this.classType = classType;
  };

  @action.bound
  public setRarity: (rarity: Rarity) => void = (rarity) => {
    this.rarity = rarity;
  };

  @action.bound
  public setMinionType: (minionType: MinionType) => void = (minionType) => {
    this.minionType = minionType;
  };

  @action.bound
  public fetchCards: () => void = async () => {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;

      const {
        cards,
        pageCount,
      }: {
        cards: Array<CardModel>;
        pageCount: number;
      } = await this.HeartstoneAPI.getCards({
        textFilter: this.valueInput,
        minionType: this.minionType,
        classType: this.classType,
        type: this.type,
        rarity: this.rarity,
        page: this.page,
      });

      if (pageCount < this.page) {
        return;
      }

      this.cards = [...this.cards, ...cards];

      this.page = this.page + pageNumber;
    } catch (error) {
      this.error = true;
    } finally {
      this.isLoading = false;
    }
  };

  @action.bound public onLoad: () => void = () => {
    this.fetchCards();
  };
}
