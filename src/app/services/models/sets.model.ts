import { ImagesSetModel } from './images.model';
import { LegalitiesModel } from './legalities.model';

export interface SetsModel {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: LegalitiesModel;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: ImagesSetModel;
}
