import {Repositories} from 'typings/repositories';
import {injector} from 'utils/injector';
import {CardsRep} from './card_api';

export class CardsServise {
  private cardRep: CardsRep = injector.get<CardsRep>(Repositories.Cards);
}
