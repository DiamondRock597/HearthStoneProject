import {observable, makeObservable, action, computed, toJS} from 'mobx';

import {HeartStoneAPI} from '../api/CardAPI';
import {SetModel} from '../models/set';
import {Card as CardModel} from '../models/card';

export interface StoreOfSets {
  cardsList: Array<CardModel>;

  getSets: () => void;
  fetchCards: (name: string) => void;
}

export class SetsStore implements StoreOfSets {
  @observable public sets: Array<SetModel> = [];
  @observable public collectionCards: Array<CardModel> = [];
  public SetsHTTP: HeartStoneAPI;

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

  @action.bound public fetchCards: (name: string) => void = async (name) => {
    const {
      cards,
    }: {cards: Array<CardModel>} = await this.SetsHTTP.getCardsOfCollection(
      name,
    );

    this.collectionCards = cards;
  };
}
