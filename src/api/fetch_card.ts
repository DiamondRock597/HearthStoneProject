import {CardModel} from '../models/Card';

export class FetchAPI {
  public static async fetchCards() {
    try {
      const res = await fetch(
        'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&type=minion&access_token=USCmj7bJcgzsgjGSJQF4k28HpSgZ9pztju',
      );

      const data = await res.json();

      const cards = await data.cards;
      return cards;
    } catch (error) {
      console.log(error);
    }
  }
}
