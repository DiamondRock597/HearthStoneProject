import {Set as SetDTO} from '../dto/set';

export class SetModel {
  public id: number;
  public name: string;
  public type: string;

  public constructor(id: number, name: string, type: string) {
    this.id = id;
    this.name = name;
    this.type = type;
  }

  public static Parse: (item: SetDTO) => SetModel = (item) =>
    new SetModel(item.id, item.name, item.type);
}
