import axios from 'axios';

import {CardDTO} from '../dto/CardsDTO';
import {CardModel} from '../models/Card';

export interface Params {
  text?: string;
  page?: number;
}

export class CardsAPI {
  public static async fetchCards({text = '', page}: Params) {
    try {
      const res = await axios.get(
        'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=US1lPj1EYYGBo327CMS97q83JBBhq0WS6R',
        {
          params: {
            class: text.toLowerCase(),
            //textFilter: text.toLowerCase(),
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
