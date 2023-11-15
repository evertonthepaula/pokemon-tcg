import { TestBed } from '@angular/core/testing';

import { BaseSignalService } from './base-signal.service';

describe('BaseSignalService', () => {
  let service: BaseSignalService<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
