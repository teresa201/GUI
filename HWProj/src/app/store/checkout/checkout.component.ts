import { Component, OnInit } from '@angular/core';
import { NgForm,ReactiveFormsModule,FormControl, NgModel, FormGroup, FormBuilder,Validators } from '@angular/forms';
//import product object
import { Product} from '../../domain/index';
import { ProductReview} from '../../domain/index';
import { CurrencyPipe } from '@angular/common';
//set up component
@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent{
  form: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    let fullname = '';
    let phonenum = '';
    this.form = new FormGroup({
      'name' : new FormControl(fullname,
         [Validators.required]),
      'phone' : new FormControl(phonenum,
        [Validators.required])
    })
  }
}
