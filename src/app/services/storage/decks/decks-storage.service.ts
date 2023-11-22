import { Injectable } from '@angular/core';

import { BaseStorageService } from '../base/base-storage.service';
import { DeckModel, DecksStorageModel } from '../../../models/decks.model';
import { IDeck, IDeckStorage } from '../../../models/interfaces/deck.model';

@Injectable({
  providedIn: 'root'
})
export class DecksStorageService extends BaseStorageService<DecksStorageModel> implements IDeckStorage {
  constructor() {
    super('decks');
  }

  private deckExists(name: string): number {
    const { decks }: DecksStorageModel = this.get();
    return decks ? decks?.findIndex(deck => deck.name === name) : -1;
  }

  private findDeck(name: string): DeckModel | null {
    const { decks }: DecksStorageModel = this.get();
    return decks?.find(deck => deck.name === name) || null;
  }

  currentDeck(): DeckModel | null {
    const { current }: DecksStorageModel = this.get();
    return this.findDeck(current);
  }

  newDeck(name: string): void {
    if (this.deckExists(name) > -1) {
      return;
    }

    const { decks }: DecksStorageModel = this.get();
    const newDeck: DeckModel = { name, cards: [] };
    this.update('decks', [...decks || [], newDeck]);
  }

  deleteDeck(name: string): void {
    const deckIndex = this.deckExists(name);

    if (deckIndex === -1) {
      return;
    }

    const { decks }: DecksStorageModel = this.get();

    decks.splice(deckIndex, 1);
    this.update('decks', decks);
  }

  setDeck(name: string): void {
    this.update('current', name);
  }

  allDecks(): string[] {
    const { decks }: DecksStorageModel = this.get();
    return decks?.map(deck => deck.name) || [];
  }
}
