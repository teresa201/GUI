import { Component, OnInit } from '@angular/core';

//import product object
import { Product} from '../../domain/index';
import { ProductReview} from '../../domain/index';
import { CurrencyPipe } from '@angular/common';
//set up component
@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent{
  private product: Product;

  constructor(){
    this.product = {
      id: 0,
      categoryId: 1,
      categoryName: 'Tasty snacks',
      name: 'Jif Peanut Butter, 40 oz',
      description:
      '7g of Protien per serving with no perservatives, artifical flavors or colors.',
      imageName: 'product_pb_natural_creamy.png',
      price: 5.99,
      reviews: []
    };
  }

}
