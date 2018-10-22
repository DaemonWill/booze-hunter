import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import * as data from '../../assets/config.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': data.LCBO_KEY
  })
};

@Injectable({ providedIn: 'root' })

export class ProductService {
  constructor(private http: HttpClient) { }

  private products : Product[] = [];
  private selectedProduct : Product = null;
  private baseUrl : string = data.BASE_URL + "products";
  private whereNot : string = data.PRODUCT_WHERE_NOT;

  public searchProducts(query : string) : Observable<any>{
    let url = this.baseUrl + "?q=" + encodeURIComponent(query) + this.whereNot;
    return this.http.get(url, httpOptions)
      /*.pipe(
        catchError(this.handleError('searchProducts', []))
      )*/;
  }

  public updateProducts(data){
    if(this.products.length > 0){
      this.products = [];
    }
    for(let prod of data.result){
      let alcoholPercent = prod.alcohol_content / 100;
      let adjectives = (prod.tasting_note != null) ? prod.tasting_note.split("; ") : null;
      let price = prod.regular_price_in_cents / 100;
      this.products.push(new Product(prod.name, prod.producer_name, prod.image_thumb_url, price,
                                prod.description, prod.id, prod.primary_category, alcoholPercent,
                                adjectives));
    }
  }

  public updateProduct(prod : Product){
    if(this.selectedProduct != null){
      this.selectedProduct.setName( prod.getName() );
      this.selectedProduct.setProducerName( prod.getProducerName() );
      this.selectedProduct.setImgUrl( prod.getImgUrl() );
      this.selectedProduct.setPrice( prod.getPrice() );
      this.selectedProduct.setDescription( prod.getDescription() );
      this.selectedProduct.setId( prod.getId() );
      this.selectedProduct.setType( prod.getType() );
      this.selectedProduct.setAlcoholPercent( prod.getAlcoholPercent() );
      this.selectedProduct.setAdjectives( prod.getAdjectives() );
    }
    else{
      this.selectedProduct = new Product(prod.getName(), prod.getProducerName(), prod.getImgUrl(),
                                        prod.getPrice(), prod.getDescription(), prod.getId(), prod.getType(),
                                        prod.getAlcoholPercent(), prod.getAdjectives());
    }
  }

  public getProduct() : Product{
    return this.selectedProduct;
  }
  public getProducts() : Product[]{
    return this.products;
  }
}
