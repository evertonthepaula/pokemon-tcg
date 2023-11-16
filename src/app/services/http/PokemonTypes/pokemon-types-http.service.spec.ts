import { TestBed } from '@angular/core/testing';

import { PokemonTypesHttpService } from './pokemon-types-http.service';

describe('PokemonTypesHttpService', () => {
  let service: PokemonTypesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonTypesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
