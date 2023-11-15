import { Injectable } from '@angular/core';

import { AuthSignalModel } from '../../signals/auth/auth.signal.model';
import { BaseStorageService } from '../base/base-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService extends BaseStorageService<AuthSignalModel>{
  constructor() {
    super();
    this.key = 'auth';
  }
}
