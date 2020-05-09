import { Routes, RouterModule, PreloadAllModules,NoPreloading } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer/add/customer-add.component';
import { CustomerEditComponent } from './customer/edit/customer-edit.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product/add/product-add.component';
import { LoginComponent } from './customer/login.component';
import { ProductEditComponent } from './product/edit/product-edit.component';


const APP_LAZY_ROUTES: Routes = [  
  {
    path: 'customer', component: CustomerComponent
  },
  {
    path: 'login', component: LoginComponent
  },  
  {
    path: 'add', component: CustomerAddComponent
  },
  {
    path: 'edit/:id', component: CustomerEditComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'product-add', component: ProductAddComponent
  },
  {
    path: 'product-edit/:id', component: ProductEditComponent
  }

];

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot 
  (APP_LAZY_ROUTES, {
    preloadingStrategy: NoPreloading
});