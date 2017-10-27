import { Component, OnInit } from '@angular/core';

//import product object
import { Product} from '../../domain/index';
import { ProductReview} from '../../domain/index';
import { ProductReviewsComponent } from '../product-reviews/product-reviews.component';
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
      imageName: '13292010.jpeg',
      price: 5.99,
      reviews: [
        {  userName: 'John Lawrimore',
         rating: 3,
         date: new Date(2017,10,25),
         comment:'Better than Skippy!!' },
         {  userName: 'Mark Fontnoet',
          rating: 4,
          date: new Date(2017,10,25),
          comment:'Try it with Marshmellow Cream!!' }
      ]
    };
  }

}
