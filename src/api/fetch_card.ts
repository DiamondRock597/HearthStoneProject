import {CardModel} from '../models/Card';

export class FetchAPI {
  public static async fetchCards() {
    const API: string = 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&';
    const APIKey: string = 'access_token=USGJSLVLINMZkCc27gAbPkvyx6M1LPrDMt';
    const res = await fetch('https://us.api.blizzard.com/hearthstone/cards?locale=en_US&type=minion&access_token=USQRpamHK5mzxHOX2zv3R4Qj62vGAFIHb8');

    const data = await res.json();

    const cards = await data.cards;
    return cards;
  }
}
