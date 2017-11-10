import { Component, OnInit, Input } from '@angular/core';

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
  @Input() product: Product;
  @Input() index: number;

  constructor(){

  }

}
