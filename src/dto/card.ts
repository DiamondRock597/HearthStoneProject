export interface Card {
  id: number;
  collectible: number;
  slug: string;
  classId: number;
  multiClassIds: Array<number>;
  minionTypeId: number;
  cardTypeId: number;
  cardSetId: number;
  rarityId: number;
  artistName: string;
  health: number;
  attack: number;
  manaCost: number;
  name: string;
  text: string;
  image: string;
  imageGold: string;
  flavorText: string;
  cropImage: string;
  keywordIds: Array<number>;
  duels: Array<boolean>;
  durability: number;
}
