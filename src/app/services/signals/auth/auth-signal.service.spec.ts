import { TestBed } from '@angular/core/testing';

import { AuthSignalService } from './auth-signal.service';

describe('AuthSignalService', () => {
  let service: AuthSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
