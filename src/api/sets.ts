import {Repositories} from 'typings/repositories';
import {injector} from 'utils/injector';
import {SetsRep} from './set_api';

export class SetsServise {
  private setsRep: SetsRep = injector.get<SetsRep>(Repositories.Sets);

  public getSets = async () => await this.setsRep.fetchSets();

  public getCardsOfCollection = async ({
    page,
    id,
    valueInput,
  }: {
    page: number;
    id: number;
    valueInput?: string;
  }) => {
    return await this.setsRep.fetchCardsOfCollection(id, page, valueInput);
  };
}
