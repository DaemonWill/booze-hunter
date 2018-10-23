import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { tap } from 'rxjs/operators';
import * as data from '../../assets/config.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': data.LCBO_KEY
  })
};

@Injectable({ providedIn: 'root' })

export class ProductService {
  constructor(private http: HttpClient) { }

  private baseUrl : string = data.BASE_URL + "products";
  private whereNot : string = data.PRODUCT_WHERE_NOT;

  public searchProducts(query : string) : Observable<any> {
    let url = this.baseUrl + "?q=" + encodeURIComponent(query) + this.whereNot;
    return this.http.get(url, httpOptions);
  }
}
