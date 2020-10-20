export class CardModel {
  public id: number;
  public img: string;
  public constructor(id: number, image: string) {
    this.id = id;
    this.img = image;
  }
  public static Parse: (item) => CardModel = (item) => new CardModel(item.id, item.image);
}
