import {Card as CardDTO} from '@dto/card';
import {Set as SetDTO} from '@dto/set';
import {Languages} from 'localisation/Localisation';
import {Card as CardModel} from '@models/card';
import {Classes, MinionType, Rarity, Types} from '@models/card_filters';
import {SetModel} from '@models/set';
import {HttpAPI} from './http_api';

const mapLanguages = {
  [Languages.EN]: 'en_US',
  [Languages.RU]: 'ru_RU',
};

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

  getSets: () => Promise<Array<SetModel>>;

  getCardsOfCollection: (
    id: number,
    page: number,
    textFilter?: string,
  ) => Promise<{cards: Array<CardModel>; pageCount: number}>;

  setupLocale: (locale: Languages) => void;

  cleanCardAPI: () => void;
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

  public getSets: () => Promise<Array<SetModel>> = async () => {
    const res = await this.http.get<Array<SetDTO>>('metadata/sets');

    const sets: Array<SetModel> = res.map((item) => SetModel.Parse(item));

    return sets;
  };

  public getCardsOfCollection: (
    id: number,
    page: number,
    textFilter?: string,
  ) => Promise<{cards: Array<CardModel>; pageCount: number}> = async (
    id,
    page,
    textFilter,
  ) => {
    const res = await this.http.get<{cards: Array<CardDTO>; pageCount: number}>(
      'cards',
      {
        params: {
          set: id,
          page,
          textFilter,
        },
      },
    );

    const cards = await res.cards.map((item: CardDTO) => CardModel.Parse(item));
    const {pageCount}: {pageCount: number} = await res;
    return {cards, pageCount};
  };

  public setupLocale: (locale: Languages) => void = (locale) => {
    this.http.addParams({locale: mapLanguages[locale]});
  };

  public cleanCardAPI: () => void = () => {
    this.http.cleanAPI();
  };
}
