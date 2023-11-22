import { Injectable, Signal } from '@angular/core';
import { BaseSignalService } from '../base/base-signal.service';
import { DeckModel } from '../../../models/decks.model';
import { IDeckSignal, IDeckStorage } from '../../../models/interfaces/deck.model';
import { PokemonCardResponse } from '../../../models/response/cards.response';
import { DecksSignalModel } from './decks.signal.model';

@Injectable({
  providedIn: 'root'
})
export class DecksSignalService extends BaseSignalService<DecksSignalModel> implements IDeckSignal {

  constructor() {
    super()
  }

  setCurrentDeck(deck: DeckModel): void {
    this.update({ current: deck });
  }

  setDeckNames(names: string[]): void {
    this.update({ decksNames: names });
  }

  getState<K extends keyof DecksSignalModel>(key: K): Signal<DecksSignalModel[K]> {
    return this.select(key);
  }

  default(payload: DecksSignalModel) {
    this.set(payload);
  }

}
