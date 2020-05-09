import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
  
})
export class LoginComponent implements OnInit  {
loginFormGroup:FormGroup;

result:any;
  constructor(private formbuilder:FormBuilder,private router:Router,private http:HttpClient)
  {}

  ngOnInit(){
    this.loginFormGroup = this.formbuilder.group({      
      email:['',Validators.required],
      pass:['',Validators.required]     
    });

  }
  
  login()
  {     
      this.http.post('https://localhost:44319/api/Login',
      { "EmailId": this.loginFormGroup.value.email,
        "Password": this.loginFormGroup.value.pass}).subscribe(res => {        
        this.result = res;        
        console.log("resss " + this.result);
      });
            
  }
  
}