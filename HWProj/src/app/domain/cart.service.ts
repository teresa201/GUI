import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from './models/product';
import { ProductReview } from './models/product-review';
import { Cart } from './models/cart';

@Injectable()
export class CartService {

    private _cartSubject: Cart = {
        items: []
    };

    public cart = new BehaviorSubject<Cart>(this._cartSubject);

    public addToCart(product: Product, quantity: number) {
        var item = this._cartSubject.items.find(x => x.product.id == product.id);
        if (item) {
            item.quantity += quantity;
        } else {
            this._cartSubject.items.push({
                product: product,
                quantity: quantity
            });
        }

        this.refreshCart();
    };

    public updateQuantity(productId: number, quantity: number) {
        var item = this._cartSubject.items.find(x => x.product.id == productId);
        if (item) {
            item.quantity = quantity;
            item.totalPrice = (item.product.price * item.quantity);
            this.refreshCart();
        }
    }

    private refreshCart() {
        this._cartSubject.totalPrice = 0;
        this._cartSubject.items.forEach((x, i) => {
            if (x.quantity > 0) {
                x.totalPrice = x.product.price * x.quantity;
                this._cartSubject.totalPrice += x.totalPrice;
            } else {
                this._cartSubject.items.splice(i, 1);
            }
        });

        this.cart.next(this._cartSubject);
    }
}
