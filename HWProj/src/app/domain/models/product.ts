import { ProductReview } from './product-review';

export class Product{
  public id?:number;
  public categoryId?:number;
  public categoryName?:string;
  public name?:string;
  public description?:string;
  public imageName?:string;
  public price?:number;
  public reviews?:ProductReview[];


constructor(id:number, categoryId:number, categoryName:string, name:string,
description:string, imageName:string, price:number, reviews:ProductReview[]){
  
  this.id = id;
  this.categoryId = categoryId;
  this.categoryName = categoryName;
  this.name = name;
  this.description = description;
  this.imageName = imageName;
  this.price = price;
  this.reviews = reviews;
}
}
