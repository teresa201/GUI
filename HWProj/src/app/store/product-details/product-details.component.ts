import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import product object
import { Product} from '../../domain/index';
import { ProductReview} from '../../domain/index';
import { CurrencyPipe } from '@angular/common';
import { ProductRepositoryService } from '../../domain/product-repository.service';
//set up component
@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent{
  product: Product;
  index: number;

  constructor(private productRepositoryService: ProductRepositoryService,
    private route: ActivatedRoute,
    private router: Router
  ){ }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.product = this.productRepositoryService.getProduct(this.index);
        }
      );
  }

}
