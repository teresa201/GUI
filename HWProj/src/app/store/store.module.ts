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
import { StoreHeaderComponent } from './store-header/store-header.component';
import { RoutingModule } from '../routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
//set up store module
@NgModule({
    imports: [
        BrowserModule,
        DomainModule,
        FormsModule,
        RouterModule,
        RoutingModule,
        ReactiveFormsModule

    ],
    declarations: [
        ProductDetailsComponent,
        ProductReviewsComponent,
        RatingComponent,
        ProductListComponent,
        CartComponent,
        CheckoutComponent,
        StoreHeaderComponent
    ],
    exports: [
        ProductDetailsComponent,
        ProductReviewsComponent,
        RatingComponent,
        ProductListComponent,
        CartComponent,
        CheckoutComponent,
        StoreHeaderComponent
    ]
})
export class StoreModule {

}
