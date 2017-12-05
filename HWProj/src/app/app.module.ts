import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//add store module allows AppComponent to find the enclosed components
import { StoreModule } from './store';
import { RoutingModule } from './routing.module';
import { ProductRepositoryService } from './domain/product-repository.service';
import { CartService } from './domain/cart.service';
@NgModule({
imports: [
  BrowserModule ,
  StoreModule,
  RoutingModule
],
declarations: [AppComponent],
providers: [ProductRepositoryService, CartService],
bootstrap: [AppComponent]
})
export class AppModule { }
