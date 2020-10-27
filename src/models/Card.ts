import {CardDTO} from '../dto/CardsDTO';

export class CardModel {
  public id: number;
  public img: string;
  public name: string;
  public health: number;
  public attack: number;
  public manaCost: number;
  public durability: number;
  public constructor(
    id: number,
    image: string,
    name: string,
    health: number,
    attack: number,
    manaCost: number,
    durability: number,
  ) {
    this.id = id;
    this.img = image;
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.manaCost = manaCost;
    this.durability = durability;
  }
  public static Parse: (item: CardDTO) => CardModel = (item) =>
    new CardModel(
      item.id,
      item.image,
      item.name,
      item.health,
      item.attack,
      item.manaCost,
      item.durability,
    );
}
