import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '../models/store';
import * as data from '../../assets/config.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': data.LCBO_KEY
  })
};

@Injectable({ providedIn: 'root' })

export class StoreService {
  constructor(private http: HttpClient) { }

  private selectedStore : Store = null;
  private baseUrl : string = data.BASE_URL + "stores";
  private whereNot : string = data.STORE_WHERE_NOT;

  public searchStores(prodId : number, lat : number, lon : number) : Observable<any>{
    let url = this.baseUrl + "?product_id=" + String(prodId) + "&lat=" + String(lat) +
              "&lon=" + String(lon) + this.whereNot;
    return this.http.get(url, httpOptions);
  }
}
