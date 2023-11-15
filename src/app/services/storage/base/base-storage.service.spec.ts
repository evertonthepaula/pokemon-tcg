import { TestBed } from '@angular/core/testing';

import { BaseStorageService } from './base-storage.service';

describe('BaseStorageService', () => {
  let service: BaseStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
