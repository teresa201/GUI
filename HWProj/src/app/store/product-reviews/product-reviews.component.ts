import { Component, OnInit,Input } from '@angular/core';

//import product object
import { Product} from '../../domain/index';
import { ProductReview} from '../../domain/index';
//set up component
@Component({
  selector: 'product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})

export class ProductReviewsComponent{
  @Input()
  public reviews : ProductReview[] = [];


  private newReview = new ProductReview();
  private numReviews = this.reviews.length;

  private addReview(){
    this.newReview.date = new Date();
    this.reviews.push(this.newReview);
    this.newReview = new ProductReview();
  }


  constructor(){}


}
