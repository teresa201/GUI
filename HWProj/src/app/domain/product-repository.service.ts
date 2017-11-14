import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Product } from './models/product';
import { ProductReview } from './models/product-review';

@Injectable()
export class ProductRepositoryService {
  productsChanged = new Subject<Product[]>();

  private products: Product[] = [
    new Product(
      0,1,
       'Tasty snacks','Jif Peanut Butter, 40 oz',
      '7g of Protien per serving with no perservatives, artifical flavors or colors.',
      '1.png',
       5.99,
       []
      ),
      new Product(
        1,1,
         'Tasty snacks','Pumpkin Spice Cheesecake Twinkies',
        'Pumpkin flavored sponge cake with cinnamon-infused cream filling',
        '2.png',
         4.49,
         []
        ),
        new Product(
          3,1,
           'Tasty snacks','Pillsbury Toaster Strudel Pastries- Strawberry',
          'Strawberry filled toaster pastry',
          '3.png',
           4.99,
           []
          ),

  ];

  constructor(){}

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }

}
