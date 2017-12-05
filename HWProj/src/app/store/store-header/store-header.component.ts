import { Component, OnInit,Input } from '@angular/core';
import { CartService } from '../../domain/cart.service';
@Component({
  selector: 'store-header',
  templateUrl: './store-header.component.html',
  styleUrls: ['./store-header.component.css']
})

export class StoreHeaderComponent{
count : number;

constructor(private cartService:CartService){ }

  ngOnInit(){
    this.cartService.cart.subscribe((val) => {
      this.count= val.items.length;
    });

}
}
