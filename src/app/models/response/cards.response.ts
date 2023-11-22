import { PokemonColorsEnum } from '../../enums/pokemon-colors.enum';
import { AttacksModel } from '../attacks.model';
import { ImagesCardModel } from '../images.model';
import { LegalitiesModel } from '../legalities.model';
import { SetsModel } from '../sets.model';
import { TcgplayerModel } from '../tcgplayer.model';
import { WeaknessesModel } from '../weaknesses.model';

export interface PokemonCardResponse {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: Array<keyof typeof PokemonColorsEnum>;
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
