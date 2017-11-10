import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DomainModule } from '../domain';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { RatingComponent } from './rating/rating.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RoutingModule } from '../routing.module';
import { RouterModule } from '@angular/router';

//set up store module
@NgModule({
    imports: [
        BrowserModule,
        DomainModule,
        FormsModule,
        RouterModule,
        RoutingModule

    ],
    declarations: [
        ProductDetailsComponent,
        ProductReviewsComponent,
        RatingComponent,
        ProductListComponent,
        CartComponent,
        CheckoutComponent
    ],
    exports: [
        ProductDetailsComponent,
        ProductReviewsComponent,
        RatingComponent,
        ProductListComponent,
        CartComponent,
        CheckoutComponent
    ]
})
export class StoreModule {

}
