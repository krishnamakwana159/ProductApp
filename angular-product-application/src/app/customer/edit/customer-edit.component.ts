import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html'  
})

export class CustomerEditComponent implements OnInit {  
  id:any;  email:any; fname: string; lname:string; pa:string; mob: number;
  gender: string; bday: any; ad: string;
  result: any;
  editFormGroup : FormGroup;

  constructor(private http: HttpClient,private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
  
    this.http.get<any[]>('https://localhost:44319/api/Customers/'+this.id).subscribe(
      data => {  this.result = data;
      this.pa = this.result.Password;
      this.email = this.result.EmailId;
      this.fname = this.result.FirstName; this.lname = this.result.LastName;
      this.mob = this.result.MobileNumber; this.bday = this.result.DOB;
      this.gender = this.result.Gender; this.ad = this.result.Address;
    var a = this.bday.split("T");
    var d = a[0];

    this.editFormGroup = this.formBuilder.group({
        firstName:[this.fname ,Validators.required],
        lastName:[this.lname ,Validators.required],   
        email: [this.email],     
        pass:[this.pa ,Validators.required],
        mob:[this.mob ,Validators.required],
        add:[this.ad ,Validators.required],
        gender:[this.gender ,Validators.required],
        bday:[d ,Validators.required]
    });
    });    
   
  }

  update(id)
  {
    this.http.put<any>('https://localhost:44319/api/Customers/'+this.id,{
      "FirstName":this.editFormGroup.value.firstName,
      "LastName":this.editFormGroup.value.lastName,
      "MobileNumber":this.editFormGroup.value.mob,
      "EmailId": this.email,     
      "Password":this.editFormGroup.value.pass,
      "Address":this.editFormGroup.value.add,
      "Gender":this.editFormGroup.value.gender,
      "DOB":this.editFormGroup.value.bday,
      "CustomerId":this.id}).subscribe(res=>{
          console.log(res);          
    });
    alert("Successfully updated !!");       
    this.router.navigate(['/customer']);
  }
}