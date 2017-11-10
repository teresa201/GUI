import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './store/product-list/product-list.component';
import { CartComponent } from './store/cart/cart.component';
import { CheckoutComponent } from './store/checkout/checkout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'products', component: ProductListComponent},
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },

]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]

})

export class RoutingModule{}
