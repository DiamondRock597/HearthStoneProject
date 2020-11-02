import axios from 'axios';

import {CardDTO} from '../dto/CardsDTO';
import {CardModel} from '../models/Card';
import {Params} from '../models/card_filters';

export interface Argument {
  text?: string;
  page?: number;
  params: Params;
}

export class CardsAPI {
  public static async fetchCards({text = '', page, params}: Argument) {
    try {
      const res = await axios.get(
        'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=USVLLTsXNnj2RZEIEGgGrtzxpl6JEWAIbY',
        {
          params: {
            ...params,
            textFilter: text.toLowerCase(),
            page,
          },
        },
      );

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
