import {imageURL, defaultImageURL} from './setsImages';
import {Set as SetDTO} from '../dto/set';

export class SetModel {
  public id: number;
  public name: string;
  public type: string;
  public image: string;

  public constructor(id: number, name: string, type: string, image: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.image = image;
  }

  public static Parse: (item: SetDTO) => SetModel = (item) => {
    return new SetModel(
      item.id,
      item.name,
      item.type,
      imageURL[item.id] || defaultImageURL,
    );
  };
}
