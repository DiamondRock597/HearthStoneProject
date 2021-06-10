import {observable, makeObservable, action, computed, toJS} from 'mobx';

import {BaseStore} from './base_store';
import {SetModel} from '@models/set';
import {Card as CardModel} from '@models/card';
import {injector} from 'utils/injector';
import {Servises} from 'typings/servises';
import {SetsServise} from 'api/sets';

export interface StoreOfSets extends BaseStore {
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

  private setsServise: SetsServise = injector.get<SetsServise>(Servises.Sets);
  private page: number = pageNumber;

  @computed public get cardsList() {
    return toJS(this.collectionCards);
  }

  public constructor() {
    makeObservable(this);
  }

  @action.bound public getSets: () => void = async () => {
    this.sets = await this.setsServise.getSets();
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

  @action.bound public cleanSets: () => void = () => {
    this.sets = [];
    this.cleanCards();
  };

  @action.bound public fetchCards: (id: number) => void = async (id) => {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;

      const params = {
        id,
        page: this.page,
        valueInput: this.valueInput,
      };

      const {
        cards,
        pageCount,
      }: {
        cards: Array<CardModel>;
        pageCount: number;
      } = await this.setsServise.getCardsOfCollection(params);

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
