import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html'  
})

export class ProductAddComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router , private formBuider: FormBuilder) {  }
  addProductFormGroup: FormGroup;
  url='https://localhost:44319/api/Products';  
  httpData:any; result: string[]; brandd: string;

  ngOnInit() {

    this.addProductFormGroup = this.formBuider.group({
      pname: ['',Validators.required],
      brand: ['',Validators.required],      
      // bcode: ['',Validators.required],
      price: ['', Validators.required],
      stts: ['', Validators.required]
    });

    this.http.get<any>('https://localhost:44319/api/Brands').subscribe(res => {
      this.result = res as string[];
      // this.result = JSON.stringify(res);      
    });
    
  }

  selectBrand(event : any)
  {
    this.brandd = event.target.value;
    console.log("BrandId: " + this.brandd);    
  }
  addProduct()
  {

    console.log(parseInt(this.addProductFormGroup.value.stts)+ ".....");

    this.http.post<any[]>('https://localhost:44319/api/Products', {
      "Name": this.addProductFormGroup.value.pname,
      "BrandId": parseInt(this.addProductFormGroup.value.brandd),
      "Price": this.addProductFormGroup.value.price,
      "Status": parseInt(this.addProductFormGroup.value.stts)
    }).subscribe(res => {
      console.log(res);
    });
    this.router.navigate(['/product']);
  }
}