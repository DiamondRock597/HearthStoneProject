export enum CardsFilters {
  Type = '',
}

export enum Classes {
  Warrior = 'warrior',
  Priest = 'priest',
  Mage = 'mage',
  Druid = 'druid',
  Paladin = 'paladin',
  Shaman = 'shaman',
  Hunter = 'hunter',
  Rogue = 'rogue',
  Warlock = 'warlock',
  DemonHunter = 'demonhunter',
}

// export enum Types {
//   Minion = 'minion',
//   Spell = 'spell',
// }

export interface Params {
  class: Classes;
}
