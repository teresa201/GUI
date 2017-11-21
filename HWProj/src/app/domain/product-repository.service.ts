import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from './models/product';
import { ProductReview } from './models/product-review';

@Injectable()
export class ProductRepositoryService {
  private products: Product[];
  constructor(
        protected httpClient: HttpClient
    ) {}

    public getAll(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('api/products')
            .catch(x => this.handleException(x));
    }

    public getById(id: number): Observable<Product> {
      return this.httpClient
          .get<Product>(`${'api/products'}/${id}`)
          .catch(x => this.handleException(x));
  }

  public update(id: number, product: Product): Observable<Product> {
        return this.httpClient
            .put(`${'api/products'}/${id}`, product)
            .catch(x => this.handleException(x));
    }
    protected handleException(exception: any) {
      var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
      alert(message);
      return Observable.throw(message);
  }
  /*productsChanged = new Subject<Product[]>();

  private products: Product[] = [
    new Product(
      0,1,
       'Tasty snacks','Jif Peanut Butter, 40 oz',
      '7g of Protien per serving with no perservatives, artifical flavors or colors.',
      '1.png',
       5.99,
       []
      ),
      new Product(
        1,1,
         'Tasty snacks','Pumpkin Spice Cheesecake Twinkies',
        'Pumpkin flavored sponge cake with cinnamon-infused cream filling',
        '2.png',
         4.49,
         []
        ),
        new Product(
          3,1,
           'Tasty snacks','Pillsbury Toaster Strudel Pastries- Strawberry',
          'Strawberry filled toaster pastry',
          '3.png',
           4.99,
           []
          ),

  ];

  constructor(){}

  getProducts() {
    return this.products.slice();
  }
*/
  /*getProduct(index: number) {
    return this.products[index];
  }*/

}
