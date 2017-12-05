import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductRepositoryService } from '../../domain/product-repository.service';
import { CartService } from '../../domain/cart.service';

//import product object
import { Product} from '../../domain/index';
import { ProductReview} from '../../domain/index';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
//set up component
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent{
  products: Product[];
  subscription: Subscription;

  constructor(private router: Router,
    private productRepositoryService:ProductRepositoryService,
    private cartService:CartService
   ){}

  ngOnInit() {
    this.productRepositoryService.getAll()
      .subscribe(x => this.onProductsLoaded(x));
    //listen to see if listings changed, use ListingService to get Listings
  /*  this.subscription = this.productRepositoryService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
    this.products = this.productRepositoryService.getProducts();*/
  }

  private onProductsLoaded(products: Product[]){
      this.products = products;
    }

    cart(product: Product){
      this.cartService.addToCart(product,1);
      this.router.navigateByUrl('/cart');
    }
  ngOnDestroy() {
  //  this.subscription.unsubscribe();
  }


}
