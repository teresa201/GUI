import { ProductReview } from './product-review';

export class Product{
  id?:number;
  categoryId?:number;
  categoryName?:string;
  name?:string;
  description?:string;
  imageName?:string;
  price?:number;
  reviews?:ProductReview[];
}
