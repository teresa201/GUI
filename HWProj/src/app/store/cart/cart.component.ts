import { Component, OnInit } from '@angular/core';

//import product object
import { Product} from '../../domain/index';
import { Cart } from '../../domain/models/cart';
import { CartItem } from '../../domain/models/cart-item';
import { ProductReview} from '../../domain/index';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../domain/cart.service';
//set up component
@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent{
  cart : Cart

  constructor(private cartService:CartService){ }

  ngOnInit(){
    this.cartService.cart.subscribe((val) => {
      this.cart = val;
    });
  }

  update(q: number, item: CartItem){
    this.cartService.updateQuantity(item.product.id, q);
  }

}
