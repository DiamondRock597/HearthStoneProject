import {Repositories} from 'typings/repositories';
import {injector} from 'utils/injector';
import {CardsRep, Params as FetchParams} from './card_api';

export class CardsServise {
  private cardRep: CardsRep = injector.get<CardsRep>(Repositories.Cards);

  public getCards = async (params: FetchParams) => {
    return await this.cardRep.fetchCards(params);
  };
}
