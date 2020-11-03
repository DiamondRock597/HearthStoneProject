import {CardDTO} from '../dto/CardsDTO';
import {CardModel} from '../models/Card';
import {Classes, MinionType, Rarity, Types} from '../models/card_filters';
import {HttpAPI} from './http_api';

export interface Params {
  class?: Classes;
  type?: Types;
  rarity?: Rarity;
  minionType?: MinionType;
  textFilter?: string;
  page: number;
  access_token?: string;
  locale?: string;
}

export class CardsAPI {
  private http: HttpAPI;
  private params: Params;

  public constructor(http: HttpAPI, params: Params) {
    this.http = http;
    this.params = params;
  }

  public async getCards({textFilter, page, type, rarity, minionType}: Params) {
    const res = await this.http.get<{cards: Array<CardDTO>; page: number}>(
      'cards',
      {
        params: {textFilter, page, type, rarity, minionType},
      },
    );

    const result = res.cards.map((item: CardDTO) => CardModel.Parse(item));

    return result;
  }
}
