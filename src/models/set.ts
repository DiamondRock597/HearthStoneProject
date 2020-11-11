import {imageURL, defaultImageURL} from './setsImages';
import {Set as SetDTO} from '../dto/set';

const countSymbolForDate: number = 3;

export class SetModel {
  public id: number;
  public name: string;
  public type: string;
  public image: string;
  public releaseDate: string;
  public slug: string;

  public constructor(
    id: number,
    name: string,
    type: string,
    image: string,
    releaseDate: string,
    slug: string,
  ) {
    this.id = id;
    this.name = name;
    this.type = type.length ? type : 'Base';
    this.image = image;
    this.slug = slug;

    this.releaseDate = new Date(releaseDate)
      .toDateString()
      .slice(countSymbolForDate);
  }

  public static Parse: (item: SetDTO) => SetModel = (item) =>
    new SetModel(
      item.id,
      item.name,
      item.type,
      imageURL[item.id] || defaultImageURL,
      item.releaseDate,
      item.slug,
    );
}
