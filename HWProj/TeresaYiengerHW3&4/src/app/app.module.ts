import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//add store module allows AppComponent to find the enclosed components
import { StoreModule } from './store';

@NgModule({
imports: [
  BrowserModule ,
  StoreModule
],
declarations: [AppComponent],
bootstrap: [AppComponent]
})
export class AppModule { }
