import { DeckModel } from '../decks.model';
import { PokemonCardResponse } from '../response/cards.response';

export interface IDeck {
  minLimit: number;
  maxLimit: number;
  addCard(card: PokemonCardResponse): void;
  removeCard(card: PokemonCardResponse): void;
}

export interface IDeckSignal {
  setCurrentDeck(deck: DeckModel): void;
  setDeckNames(names: string[]): void;
}

export interface IDeckStorage {
  newDeck(name: string): void;
  setDeck(name: string): void;
  currentDeck(): DeckModel | null;
  allDecks(): Array<string>;
}
