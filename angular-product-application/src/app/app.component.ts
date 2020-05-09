import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  constructor(private router: Router) {  }
  // columnDefs = [
  //       {headerName: 'Make', field: 'make' },
  //       {headerName: 'Model', field: 'model' },
  //       {headerName: 'Price', field: 'price'}
  //   ];

  //   rowData = [
  //       { make: 'Toyota', model: 'Celica', price: 35000 },
  //       { make: 'Ford', model: 'Mondeo', price: 32000 },
  //       { make: 'Porsche', model: 'Boxter', price: 72000 }
  //   ];

  ngOnInit() {
    
  }

  login()
  {
    this.router.navigate(['./login']);
  }  
  customers()  
  {    
    this.router.navigate(['./customer']);
  }

  products()
  {
    this.router.navigate(['./product']);
  }

}
