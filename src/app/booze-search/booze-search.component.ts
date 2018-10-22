import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../services/product.service';
import { StoreService } from '../services/store.service';
import { Product } from '../models/product';
import { Store } from '../models/store';

@Component({
  selector: 'app-booze-search',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './booze-search.component.html',
  styleUrls: ['./booze-search.component.css']
})

export class BoozeSearchComponent implements OnInit {
  constructor(private productService : ProductService, private storeService : StoreService){}

  ngOnInit() {}

  searchParams = {
    query : null,
    location : null,
    lat : null,
    lon : null
  };

  productsData = null;
  storesData = null;
  selectedProduct = null;
  selectedStore = null;
  products = null;
  stores = null;

  searchProducts(): void {
    this.productService.searchProducts( this.searchParams.query )
    .subscribe(productsData => {this.productsData = productsData});
  }
  searchStores(): void {
    this.storeService.searchStores( this.selectedProduct.getId(), this.searchParams.lat, this.searchParams.lon)
    .subscribe(storesData => {this.storesData = storesData});
  }

  updateProducts(): void {
    this.productService.updateProducts(this.productsData);
    this.products = this.productService.getProducts();
    console.log(this.products);
  }
  updateStores(): void {
    this.storeService.updateStores(this.storesData);
    this.stores = this.storeService.getStores();
  }

  /*selectProduct(prod: Product) void {
    this.productService.updateProduct(prod);
    this.selectProduct = this.productService.getProduct();
  }
  selectStore(store: Store) void {
    this.storeService.updateStore(store);
    this.selectStore = this.storeService.getStore();
  }*/
}
