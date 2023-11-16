import { TestBed } from '@angular/core/testing';

import { CardsHttpService } from './cards-http.service';

describe('CardsHttpService', () => {
  let service: CardsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
