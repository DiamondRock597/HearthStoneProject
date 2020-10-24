import {CardDTO} from '../dto/CardsDTO';
import {CardModel} from '../models/Card';
export class FetchAPI {
  public static async fetchCards({type, ...other} = {type: 'minion'}) {
    try {
      const res = await fetch(
        'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&type=minion&access_token=USCmj7bJcgzsgjGSJQF4k28HpSgZ9pztju',
        {
          params: {
            type,
          },
        },
      );

      const data = await res.json();

      const cards: Array<CardDTO> = await data.cards;

      return cards.map((item: CardDTO) => CardModel.Parse(item));
    } catch (error) {
      console.log(error);
    }
  }
}
