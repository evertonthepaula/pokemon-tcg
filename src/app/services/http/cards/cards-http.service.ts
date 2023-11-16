import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.hmg';
import { objectToHttpParams } from '../../../utils/object-to-query-params';
import { CardDetailsRequest, CardsRequest } from '../../models/request/cards.request.model';
import { CardResponse } from '../../models/response/cards.response';
import { CommonResponse } from '../../models/response/common.response';

@Injectable({
  providedIn: 'root'
})
export class CardsHttpService {

  constructor(private http: HttpClient) { }

  /**
   * Gets a list of cards
   *
   * @param req - The CardsRequest type
   */
  get(req: CardsRequest): Observable<CommonResponse<CardResponse>> {
    const params: HttpParams = objectToHttpParams(req);
    return this.http.get<CommonResponse<CardResponse>>(`${environment.api}cards`, { params });
  }


  /**
   * Finds a single card
   *
   * @param req - The CardDetailsRequest type
   */
  find({ id, ...select }: CardDetailsRequest): Observable<any> {
    const params: HttpParams = objectToHttpParams(select);
    return this.http.get<Observable<any>>(`${environment.api}cards/${id}`, { params });
  }
}
