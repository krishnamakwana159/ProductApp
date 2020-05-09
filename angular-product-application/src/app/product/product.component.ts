import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
import { SearchPipe } from './SearchPipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'  
})

export class ProductComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router , private formBuider: FormBuilder) {  }
  
  url='https://localhost:44319/api/vProductBrands';  
  httpData:any;
  searchText: string; searchFormGroup: FormGroup;

  ngOnInit() {
    this.searchFormGroup = this.formBuider.group({
      searchP: ['']
    });

    this.http.get<any[]>(this.url).subscribe(data => {
      this.httpData = data;
       console.log("data",this.httpData);
    })
  }

  search()
  {
    this.http.put('https://localhost:44319/api/Login', {
      "Name": this.searchFormGroup.value.searchP
    }).subscribe(res => {
       console.log("ssss "+res); 
    });
  }

  delete(id: any)
  {
    this.http.delete<any>('https://localhost:44319/api/Products/'+id).subscribe(res=>
    {
      console.log(res);
    });
  }
}