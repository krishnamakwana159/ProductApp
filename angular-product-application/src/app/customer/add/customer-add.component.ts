import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html'  
})

export class CustomerAddComponent implements OnInit {
  
  url='https://localhost:44319/api/Customers';  
  httpData:any;
  createFormGroup : FormGroup;

constructor(private http: HttpClient, private router: Router , private formBuider: FormBuilder) {  }


  ngOnInit() {
    this.createFormGroup = this.formBuider.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      add: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      conPass: ['', Validators.required],
      mob: ['', Validators.required],
      gender: ['', Validators.required],
      bday: ['', Validators.required]
    });
// Validators.maxLength(10), Validators.minLength(10)
  }

  submit()
  {
    if(this.createFormGroup.value.pass == this.createFormGroup.value.conPass)
    {
      this.http.post<any>(this.url, 
      { 
        "FirstName" : this.createFormGroup.value.firstName,
        "LastName" : this.createFormGroup.value.lastName,
        "Address" : this.createFormGroup.value.add,
        "EmailId" : this.createFormGroup.value.email,
        "Password" : this.createFormGroup.value.pass,
        "Gender" : this.createFormGroup.value.gender,
        "MobileNumber": this.createFormGroup.value.mob,
        "DOB": this.createFormGroup.value.bday
      }).subscribe( res => {
          console.log("result "+ res);          
        }              
      );
      this.router.navigate(['/customer']);
    }
    else
    {
      alert("Password and Confirm Password doesn't match !!");
    }    
  }
}