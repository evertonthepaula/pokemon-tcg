import { AttacksModel } from '../attacks.model';
import { ImagesCardModel, ImagesSetModel } from '../images.model';
import { LegalitiesModel } from '../legalities.model';
import { SetsModel } from '../sets.model';
import { TcgplayerModel } from '../tcgplayer.model';
import { WeaknessesModel } from '../weaknesses.model';

export interface CardResponse {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo: string[];
  rules: string[];
  attacks: AttacksModel[];
  weaknesses: WeaknessesModel[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: SetsModel;
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: number[];
  legalities: LegalitiesModel;
  images: ImagesCardModel;
  tcgplayer: TcgplayerModel;
}
