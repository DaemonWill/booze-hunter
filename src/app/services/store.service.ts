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

  private stores : Store[] = [];
  private selectedStore : Store = null;
  private baseUrl : string = data.BASE_URL + "stores";
  private whereNot : string = data.STORE_WHERE_NOT;

  public searchStores(prodId : number, lat : number, lon : number) : Observable<any>{
    let url = this.baseUrl + "?product_id=" + String(prodId) + "&lat=" + String(lat) +
              "&lon=" + String(lon) + this.whereNot;
    return this.http.get(url, httpOptions)
      /*.pipe(
        catchError(this.handleError('searchProducts', []))
      )*/;
  }

  public updateStores(data){
    if(this.stores.length > 0){
      this.stores = [];
    }
    for(let i = 0; i < 4; i++){
      let store = data.result[i];
      let address = store.address_line_1 + "; " + store.postal_code;
      this.stores.push(new Store(store.name, address, store.id, store.lat, store.lon));
    }
  }

  public updateStore(store : Store){
    if(this.selectedStore != null){
      this.selectedStore.setName( store.getName() );
      this.selectedStore.setAddress( store.getAddress() );
      this.selectedStore.setId( store.getId() );
      this.selectedStore.setLatitude( store.getLatitude() );
      this.selectedStore.setLongitude( store.getLongitude() );
    }
    else{
      this.selectedStore = new Store(store.getName(), store.getAddress(), store.getId(), store.getLatitude(),
                                    store.getLongitude());
    }
  }

  public getStore() : Store{
    return this.selectedStore;
  }
  public getStores() : Store[]{
    return this.stores;
  }
}
