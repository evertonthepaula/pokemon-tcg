import { TestBed } from '@angular/core/testing';

import { DecksStorageService } from './decks-storage.service';

describe('DecksStorageService', () => {
  let service: DecksStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecksStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
