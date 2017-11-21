import { Observable } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './models/product';
export class MockApi implements InMemoryDbService {
    createDb(): any {
        return {
            products:[
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
                    2,1,
                     'Tasty snacks','Pillsbury Toaster Strudel Pastries- Strawberry',
                    'Strawberry filled toaster pastry',
                    '3.png',
                     4.99,
                     []
                    ),

            ]
        };
    }

}
