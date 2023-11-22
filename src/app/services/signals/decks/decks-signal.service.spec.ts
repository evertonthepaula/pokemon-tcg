import { TestBed } from '@angular/core/testing';

import { DecksSignalService } from './decks-signal.service';

describe('DecksSignalService', () => {
  let service: DecksSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecksSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
