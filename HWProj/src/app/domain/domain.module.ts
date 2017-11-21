import { NgModule } from '@angular/core';
import { MockApi } from './mock-api.service';
import { ProductRepositoryService } from './product-repository.service';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    InMemoryWebApiModule.forFeature(MockApi),
    HttpClientModule
  ],
  providers: [ProductRepositoryService ]
})
export class DomainModule { }
