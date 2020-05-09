import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomerAddComponent } from './customer/add/customer-add.component';
import { APP_LAZY_ROUTING } from './app.lazy.routing';
import { CustomerEditComponent } from './customer/edit/customer-edit.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './customer/login.component';
import { ProductAddComponent } from './product/add/product-add.component';
import { ProductEditComponent } from './product/edit/product-edit.component';
import { AgGridModule } from 'ag-grid-angular';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports:      [ ReactiveFormsModule  , APP_LAZY_ROUTING, HttpClientModule, BrowserModule, FormsModule, RouterModule, AgGridModule.withComponents([]) ],
  exports: [ RouterModule ],
  
  declarations: [ AppComponent, HelloComponent,LoginComponent,  CustomerComponent, CustomerAddComponent, CustomerEditComponent, ProductComponent, ProductAddComponent, ProductEditComponent,  SearchPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
