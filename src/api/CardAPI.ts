import {Card as CardDTO} from '../dto/card';
import {Set as SetDTO} from '../dto/set';
import {Card as CardModel} from '../models/card';
import {Classes, MinionType, Rarity, Types} from '../models/card_filters';
import {HttpAPI} from './http_api';

export interface Params {
  classType?: Classes;
  type?: Types;
  rarity?: Rarity;
  minionType?: MinionType;
  textFilter?: string;
  page: number;
}

export interface HeartStoneAPI {
  getCards: (
    params: Params,
  ) => Promise<{cards: Array<CardModel>; pageCount: number}>;

  getSets: () => void;
}

export class CardsAPI implements HeartStoneAPI {
  private http: HttpAPI;

  public constructor(http: HttpAPI) {
    this.http = http;
  }

  public getCards: (
    params: Params,
  ) => Promise<{cards: Array<CardModel>; pageCount: number}> = async (
    params,
  ) => {
    const res = await this.http.get<{
      cards: Array<CardDTO>;
      page: number;
      pageCount: number;
    }>('cards', {
      params: {
        type: params.type,
        class: params.classType,
        page: params.page,
        minionType: params.minionType,
        rarity: params.rarity,
        textFilter: params.textFilter,
      },
    });

    const cards = await res.cards.map((item: CardDTO) => CardModel.Parse(item));

    const {pageCount}: {pageCount: number} = res;

    return {cards, pageCount};
  };

  public getSets: () => void = async () => {
    const res = await this.http.get<Array<SetDTO>>('metadata/sets');
  };
}
