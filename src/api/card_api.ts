import {Card as CardDTO} from '@dto/card';
import {Languages} from 'localisation/Localisation';
import {Card as CardModel} from '@models/card';
import {Classes, MinionType, Rarity, Types} from '@models/card_filters';
import {HttpAPI} from './http_api';
import {injector} from 'utils/injector';
import {Configs} from 'config/configs';

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

export interface CardsRep {
  getCards: (
    params: Params,
  ) => Promise<{cards: Array<CardModel>; pageCount: number}>;

  setupLocale: (locale: Languages) => void;

  cleanCardAPI: () => void;
}

export class CardsRepository implements CardsRep {
  private http: HttpAPI = injector.get(Configs.Http);

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

  public setupLocale: (locale: Languages) => void = (locale) => {
    this.http.addParams({locale: mapLanguages[locale]});
  };

  public cleanCardAPI: () => void = () => {
    this.http.cleanAPI();
  };
}
