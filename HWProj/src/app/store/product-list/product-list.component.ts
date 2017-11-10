import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductRepositoryService } from '../../domain/product-repository.service';

//import product object
import { Product} from '../../domain/index';
import { ProductReview} from '../../domain/index';
import { CurrencyPipe } from '@angular/common';
//set up component
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent{
  products: Product[];
  subscription: Subscription;

  constructor(private productRepositoryService:ProductRepositoryService ){}

  ngOnInit() {
    //listen to see if listings changed, use ListingService to get Listings
    this.subscription = this.productRepositoryService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
    this.products = this.productRepositoryService.getProducts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
