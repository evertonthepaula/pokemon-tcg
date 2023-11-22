import { TestBed } from '@angular/core/testing';

import { DecksfacadeService } from './decksfacade.service';

describe('DecksfacadeService', () => {
  let service: DecksfacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecksfacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
