import {Repositories} from 'typings/repositories';
import {injector} from 'utils/injector';
import {SetsRep} from './set_api';

export class SetsServise {
  private setsRep: SetsRep = injector.get<SetsRep>(Repositories.Sets);
}
