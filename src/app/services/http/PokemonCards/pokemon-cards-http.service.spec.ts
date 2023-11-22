import { TestBed } from '@angular/core/testing';

import { PokemonCardsHttpService } from './pokemon-cards-http.service';

describe('PokemonCardsHttpService', () => {
  let service: PokemonCardsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCardsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
