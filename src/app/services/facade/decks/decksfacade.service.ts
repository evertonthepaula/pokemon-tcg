import { Injectable, Signal } from '@angular/core';
import { IDeck, IDeckSignal, IDeckStorage } from '../../../models/interfaces/deck.model';
import { PokemonCardResponse } from '../../../models/response/cards.response';
import { DecksSignalService } from '../../signals/decks/decks-signal.service';
import { DecksStorageService } from '../../storage/decks/decks-storage.service';
import { DeckModel, DecksStorageModel } from '../../../models/decks.model';
import { DecksSignalModel } from '../../signals/decks/decks.signal.model';
import { DEFAULT_DECKS_VALUE } from '../../signals/decks/decks.signal.default';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DecksfacadeService implements IDeck {
  minLimit: number = 24;
  maxLimit: number = 60;

  constructor(
    private toastr: ToastrService,
    private decksSignalService: DecksSignalService,
    private decksStorageService: DecksStorageService
  ) {
    this.init();
  }

  private init() {
    const { current } = this.decksStorageService.get();
    const currentDeck = this.decksStorageService.currentDeck();
    const allDecks = this.decksStorageService.allDecks();

    if (current) {
      return this.decksSignalService.default({
        decksNames: allDecks,
        current: currentDeck,
      });
    }

    return this.decksSignalService.default(DEFAULT_DECKS_VALUE);
  }

  private maxQtd(): boolean {
    const current = this.currentDeck();

    if (current?.cards) {
      return current?.cards?.length > this.maxLimit ? true : false;
    }

    return false;
  }

  newDeck(name: string): void {
    this.decksStorageService.newDeck(name);
    this.decksSignalService.setDeckNames(this.decksStorageService.allDecks());
  }

  deleteDeck(name: string): void {
    this.decksStorageService.deleteDeck(name);
    this.decksSignalService.setDeckNames(this.decksStorageService.allDecks());
    this.toastr.warning(`Deck "${name}" removido`, 'Deck removido!');

    const { current } = this.decksStorageService.get();

    if (current === name) {
      return this.decksSignalService.setCurrentDeck({ name: '', cards: [] });
    }
  }

  setDeck(name: string): void {
    this.decksStorageService.setDeck(name);
    this.decksSignalService.setCurrentDeck({ name: name, cards: [] });
  }

  addCard(card: PokemonCardResponse) {
    const deck = this.currentDeck();

    if (!deck) {
      throw new Error('Baralho não encontrado');
    }

    if (this.maxQtd()) {
      this.toastr.error('Limite de cartas atingido', 'Não é possível adicionar mais cartas ao baralho');
      throw new Error('Quantidade limite de cartas no deck alcançado');
    }

    // TODO: imutabilidade
    const storage = this.decksStorageService.get();
    const index = storage.decks.findIndex(ele => ele.name === deck?.name);
    storage.decks[index].cards.push(card);
    this.decksStorageService.update('decks', storage.decks);
    this.decksSignalService.setCurrentDeck(storage.decks[index]);
    this.toastr.success(`${card.name} foi adicionado ao deck`, 'Carta adicionada ao deck');
  }

  removeCard(card: PokemonCardResponse) {
    const deck = this.currentDeck();
    if (!deck) {
      throw new Error('Baralho não encontrado');
    }
    // TODO: imutabilidade
    const storage = this.decksStorageService.get();
    const index = storage.decks.findIndex(ele => ele.name === deck.name);
    storage.decks[index].cards.splice(index, 1);
    this.decksStorageService.update('decks', storage.decks);
    this.decksSignalService.setCurrentDeck(storage.decks[index]);
    this.toastr.warning(`${card.name} removido`, 'Carta removida do deck');
  }

  currentDeck(): DeckModel | null {
    return this.decksStorageService.currentDeck();
  }

  allDecks() {
    this.decksStorageService.allDecks();
  }

  signalState(): DecksSignalModel {
    return this.decksSignalService.snapshot
  }

  getState<K extends keyof DecksSignalModel>(key: K): Signal<DecksSignalModel[K]> {
    return this.decksSignalService.getState(key);
  }
}
