import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { StoreService } from '../services/store.service';
import { LocationService } from '../services/location.service';
import { Product } from '../models/product';
import { Store } from '../models/store';

@Component({
  selector: 'app-booze-search',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './booze-search.component.html',
  styleUrls: ['./booze-search.component.css']
})

export class BoozeSearchComponent implements OnInit {
  constructor(private productService : ProductService, private storeService : StoreService,
              private locationService : LocationService){}
  ngOnInit() {}

  searchParams = {
    query : null,
    lat : 0,
    lon : 0
  };
  selectedProduct : Product = null;
  selectedStore : Store = null;
  products : Product[] = [];
  stores : Store[] = [];

  setLocation(): void{
    this.locationService.getLocation().then((pos) => {
        this.locationService.getCoord(pos);
        this.searchParams.lat = this.locationService.getLat();
        this.searchParams.lon = this.locationService.getLon();
    }).catch((err) => {
        this.locationService.errorCb(err);
    });
  }

  searchProducts(): void {
    this.productService.searchProducts(this.searchParams.query).subscribe({
      next : data => {
        this.updateProducts(data);
      }
    })
  }
  searchStores(): void {
    this.storeService.searchStores(this.selectedProduct.getId(), this.searchParams.lat, this.searchParams.lon)
    .subscribe({
      next : data => {
        this.updateStores(data.result);
      }
    })
  }

  updateProducts(data): void{
    if(this.products){
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
  public updateStores(data): void{
    if(this.stores.length > 0){
      this.stores = [];
    }
    for(let i = 0; i < 4; i++){
      let store = data[i];
      let address = store.address_line_1 + "; " + store.postal_code;
      this.stores.push(new Store(store.name, address, store.id, store.latitude, store.longitude));
    }
    console.log(this.stores);
  }

  public selectProduct(newProd : Product) : void {
    this.selectedProduct = newProd;
    console.log(this.selectedProduct)
  }
}
