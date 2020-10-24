import {CardDTO} from '../dto/CardsDTO';

export class CardModel {
  public id: number;
  public img: string;
  public name: string;
  public constructor(id: number, image: string, name: string) {
    this.id = id;
    this.img = image;
    this.name = name;
  }
  public static Parse: (item: CardDTO) => CardModel = (item) =>
    new CardModel(item.id, item.image, item.name);
}
