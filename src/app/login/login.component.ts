import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../api.service';
import { CookieService } from '../cookie.service';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
user:any;
valid:boolean = true;

  constructor(private api:APIService,private cookie:CookieService,private router:Router) { 
    
  }

  ngOnInit(): void {

    let usertype = this.cookie.get("usertype");
    if(usertype == "admin")
    {
      this.router.navigate(["admin/dashboard"]);
    }

    this.user = new FormGroup({
      email: new FormControl("", Validators.compose([Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)])),
      password:new FormControl("",Validators.compose([Validators.required]))

    })
  }
submit=(user:any)=>{

let apiurl = "authentication/login";
let data = this.api.post(apiurl,{data:user});
  data.subscribe((mydata:any)=>{
    console.log(mydata);
    if(mydata.data.status=="success")
    {
      this.cookie.set("usertype","admin");
      this.cookie.set("authkey",mydata.data.authkey);
      this.router.navigate(["admin/dashboard"]);


    }
else
  this.valid = false;

  });

}
}
