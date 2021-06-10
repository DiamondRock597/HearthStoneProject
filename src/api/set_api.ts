import {Configs} from 'config/configs';
import {SetModel} from 'models/set';
import {injector} from 'utils/injector';
import {HttpAPI} from './http_api';
import {Set as SetDTO} from '@dto/set';
import {Card as CardDTO} from '@dto/card';
import {Card as CardModel} from '@models/card';

export interface SetsRep {
  fetchSets: () => Promise<Array<SetModel>>;

  fetchCardsOfCollection: (
    id: number,
    page: number,
    textFilter?: string,
  ) => Promise<{
    cards: Array<CardModel>;
    pageCount: number;
  }>;
}

export class SetsRepository implements SetsRep {
  private http: HttpAPI = injector.get<HttpAPI>(Configs.Http);

  public fetchSets = async () => {
    const res = await this.http.get<Array<SetDTO>>('metadata/sets');

    const sets: Array<SetModel> = res.map((item) => SetModel.Parse(item));

    return sets;
  };

  public fetchCardsOfCollection = async (
    id: number,
    page: number,
    textFilter?: string,
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
}
