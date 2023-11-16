import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.hmg';
import { CommonResponse } from '../../models/response/common.response';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypesHttpService {

  constructor(private http: HttpClient) { }

  /**
 * Gets a list of pokemon types
 */
  get(): Observable<CommonResponse<Array<string>>> {
    return this.http.get<CommonResponse<Array<string>>>(`${environment.api}types`);
  }

}
