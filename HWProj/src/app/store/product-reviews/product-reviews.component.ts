import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
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
//  _reviews : ProductReview[];
  @Input() reviews : ProductReview[];
  //public get reviews(): ProductReview[] {
  //  return this._reviews;
//  }
 //public set reviews(value: ProductReview[]) {
   //if (this._reviews !== value) {
  //    console.log('emit',value)
  //    this.productReviewChange.emit(value);
  //  }
//    this._reviews = value;
//  }
  //public reviews : ProductReview[] = [];

  @Output()
  public productReviewChange: EventEmitter<ProductReview[]> = new EventEmitter<ProductReview[]>();

  private newReview = new ProductReview();
 //private numReviews = this.reviews.length;
//private numReviews = 0;

  private addReview(){
    //if (!this.reviews) {
    //  this.reviews = [];
    //}

  //  this.phoneNumbers.push(this.newPhone);
  //  this.newPhone = new Phone();

    this.newReview.date = new Date();
  //  this.numReviews++;
    this.reviews.push(this.newReview);
  //  console.log(this.numReviews);
    this.productReviewChange.emit(this.reviews);
    this.newReview = new ProductReview();
    //console.log(this.reviews);
    //this.numReviews++;
  }


  constructor(){}


}
