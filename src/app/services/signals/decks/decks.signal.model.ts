import { DeckModel } from '../../../models/decks.model';

export interface DecksSignalModel {
  decksNames: Array<string>;
  current: DeckModel | null;
}
