import { PokemonCardResponse } from './response/cards.response';

export interface DecksStorageModel {
  decks: Array<DeckModel>;
  current: string;
}

export interface DeckModel {
  name: string;
  cards: Array<PokemonCardResponse>;
}
