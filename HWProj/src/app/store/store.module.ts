import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { DomainModule } from '../domain';

//set up store module
@NgModule({
    imports: [
        BrowserModule,
        DomainModule
    ],
    declarations: [
        ProductDetailsComponent
    ],
    exports: [
        ProductDetailsComponent
    ]
})
export class StoreModule {

}
