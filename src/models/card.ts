import {Card as CardDTO} from '../dto/card';

export class Card {
  public id: number;
  public img: string;
  public name: string;
  public health?: number;
  public attack?: number;
  public manaCost: number;
  public durability?: number;
  public text: string;
  public constructor(
    id: number,
    image: string,
    name: string,
    health: number,
    attack: number,
    manaCost: number,
    durability: number,
    text: string,
  ) {
    this.id = id;
    this.img = image;
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.manaCost = manaCost;
    this.durability = durability;
    this.text = text;
  }

  public static Parse: (item: CardDTO) => Card = (item) =>
    new Card(
      item.id,
      item.image,
      item.name,
      item.health,
      item.attack,
      item.manaCost,
      item.durability,
      item.text,
    );
}
