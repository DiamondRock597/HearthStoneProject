import axios from 'axios';

import {CardDTO} from '../dto/CardsDTO';
import {CardModel} from '../models/Card';
//import MockedCard from './mocked_cards.json';

export interface Params {
  text?: string;
  page?: number;
  paramsAtribute?: string;
}

export class CardsAPI {
  public static async fetchCards({
    text = '',
    page,
    paramsAtribute = 'type',
  }: Params) {
    try {
      const res = await axios.get(
        'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=USf8pl23QZ7JNdtiqnPHgsfkajDoaCBNWC',
        {
          params: {
            [paramsAtribute]: text,
            page,
          },
        },
      );
      console.log({res});

      const cards = res.data.cards;
      return {
        cards: cards.map((item: CardDTO) => CardModel.Parse(item)),
        page: res.data.page,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
