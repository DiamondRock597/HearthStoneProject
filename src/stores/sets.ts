import {observable, makeObservable, action, computed, toJS} from 'mobx';

import {HeartStoneAPI} from '../api/CardAPI';
import {SetModel} from '../models/set';
import {Card as CardModel} from '../models/card';

export interface StoreOfSets {
  cardsList: Array<CardModel>;
  isLoading: boolean;
  error: boolean;
  valueInput: string;

  getSets: () => void;
  fetchCards: (id: number) => void;
  cleanCards: () => void;
  setSearchValue: (text: string) => void;

  dispose: () => void;
}

const pageNumber: number = 1;

export class SetsStore implements StoreOfSets {
  @observable public sets: Array<SetModel> = [];
  @observable public collectionCards: Array<CardModel> = [];
  @observable public isLoading: boolean = false;
  @observable public error: boolean = false;
  @observable public valueInput: string = '';

  private SetsHTTP: HeartStoneAPI;
  private page: number = pageNumber;

  @computed public get cardsList() {
    return toJS(this.collectionCards);
  }

  public constructor(http: HeartStoneAPI) {
    this.SetsHTTP = http;
    makeObservable(this);
  }

  @action.bound public getSets: () => void = async () => {
    this.sets = await this.SetsHTTP.getSets();
  };

  @action.bound public cleanCards: () => void = () => {
    this.collectionCards = [];
    this.page = pageNumber;
  };

  @action.bound public dispose: () => void = () => {
    this.cleanCards();
    this.error = false;
    this.isLoading = false;
    this.sets = [];
    this.valueInput = '';
  };

  @action.bound public setSearchValue: (text: string) => void = (text) => {
    this.valueInput = text;
  };

  @action.bound public fetchCards: (id: number) => void = async (id) => {
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
      } = await this.SetsHTTP.getCardsOfCollection(
        id,
        this.page,
        this.valueInput,
      );

      if (pageCount < this.page) {
        return;
      }

      this.collectionCards = [...this.collectionCards, ...cards];
      this.page = this.page + pageNumber;
    } catch (error) {
      this.error = true;
    } finally {
      this.isLoading = false;
    }
  };
}
