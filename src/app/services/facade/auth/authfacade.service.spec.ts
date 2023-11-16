import { TestBed } from '@angular/core/testing';

import { AuthfacadeService } from './authfacade.service';

describe('AuthfacadeService', () => {
  let service: AuthfacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthfacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
