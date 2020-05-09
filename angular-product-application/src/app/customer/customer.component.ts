import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'  
})

export class CustomerComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {  }

  url='https://localhost:44319/api/Customers';  
  httpData:any;
  searchText: string;
  
  ngOnInit() {
    this.http.get<any[]>(this.url).subscribe(data => {
      this.httpData = data;
       console.log("data",this.httpData);
    })
  }

  delete(id: number)
  {
    this.http.delete<any>('https://localhost:44319/api/Customers/'+id).subscribe(res=>
    {
      console.log(res);
    });
    window.location.reload();
  }
}