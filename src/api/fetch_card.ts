import {CardModel} from '../models/Card';

export class FetchAPI {
  public static async fetchCards() {
    const API: string = 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&';
    const APIKey: string = 'access_token=USGJSLVLINMZkCc27gAbPkvyx6M1LPrDMt';
    const res = await fetch('https://us.api.blizzard.com/hearthstone/cards?locale=en_US&type=minion&access_token=USQRpamHK5mzxHOX2zv3R4Qj62vGAFIHb8');
    console.log({res});

    const data = await res.json();
    console.log({data});

    const cards = await data.cards;
    return cards;
  }
}
