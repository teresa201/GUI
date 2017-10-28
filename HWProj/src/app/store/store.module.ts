import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DomainModule } from '../domain';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { RatingComponent } from './rating/rating.component';
//set up store module
@NgModule({
    imports: [
        BrowserModule,
        DomainModule,
        FormsModule
    ],
    declarations: [
        ProductDetailsComponent,
        ProductReviewsComponent,
        RatingComponent
    ],
    exports: [
        ProductDetailsComponent,
        ProductReviewsComponent,
        RatingComponent
    ]
})
export class StoreModule {

}
