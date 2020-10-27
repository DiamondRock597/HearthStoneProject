import axios from 'axios';

import {CardDTO} from '../dto/CardsDTO';
import {CardModel} from '../models/Card';
//import MockedCard from './mocked_cards.json';

export interface Params {
  type: string;
}

export class CardsAPI {
  public static async fetchCards({type}: Params = {type: 'minion'}) {
    try {
      const res = await axios.get(
        'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=USf8pl23QZ7JNdtiqnPHgsfkajDoaCBNWC',
        {
          params: {
            type,
          },
        },
      );
      const cards = res.data.cards;
      return cards.map((item: CardDTO) => CardModel.Parse(item));
    } catch (error) {
      console.log(error);
    }
  }
}
