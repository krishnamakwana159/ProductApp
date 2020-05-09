import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'  
})

export class ProductEditComponent implements OnInit {

  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute , private router: Router , private formBuider: FormBuilder) {  }
  id:any;
  url='https://localhost:44319/api/Products';  
  httpData:any;
  editProductFormGroup: FormGroup;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log("id " + this.id);

    this.editProductFormGroup = this.formBuider.group({
      pname: ['',Validators.required],
      bcode: ['',Validators.required],
      price: ['', Validators.required],
      stts: ['', Validators.required]
    });    

    this.http.get<any[]>('https://localhost:44319/api/Products/'+this.id).subscribe(data => {
      this.httpData = data;
       console.log("data",this.httpData);
    })
  }

  update()
  {
    this.http.put<any>('https://localhost:44319/api/Products/'+this.id ,{
      "ProductCode": this.id,
      "Name": this.editProductFormGroup.value.pname,
      "Price": this.editProductFormGroup.value.price,
      "Status": this.editProductFormGroup.value.stts,
    }).subscribe(res=>{
          console.log(res);          
    });
    alert("Successfully updated !!");       
    this.router.navigate(['/product']);
  }
}