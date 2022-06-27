import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../api.service';
import { CookieService } from '../cookie.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   employee:any;
   id:string | null = "";

   constructor(private api: APIService, private cookie: CookieService, private router: Router, private activatedRoute: ActivatedRoute) {
   }
 
   ngOnInit(): void {
     this.id = this.activatedRoute.snapshot.paramMap.get("id");
     if(this.id != "0")
     {
       let apiurl = "employees/get";
       let data = this.api.post(apiurl, { data: { id: this.id } });
       data.subscribe((mydata: any) => {
         this.employee = mydata.data;
         this.show();
       });
     }
     this.show();
   }
 
   show = ()=>{
     this.employee = new FormGroup({
       id: new FormControl(this.employee == null ? "" : this.employee._id),
       empid: new FormControl(this.employee == null ? "" : this.employee.empid, Validators.compose([Validators.required])),
       name: new FormControl(this.employee == null ? "" : this.employee.name, Validators.compose([Validators.required])),
       gender: new FormControl(this.employee == null ? "" : this.employee.gender, Validators.compose([Validators.required])),
      
       birthdate: new FormControl(this.employee == null ? "" : this.employee.birthdate, Validators.compose([Validators.required])),
       address: new FormControl(this.employee == null ? "" : this.employee.address, Validators.compose([Validators.required])),
       email: new FormControl(this.employee == null ? "" : this.employee.email, Validators.compose([Validators.required])),
       mobileno: new FormControl(this.employee == null ? "" : this.employee.mobileno, Validators.compose([Validators.required])),
       joiningdate: new FormControl(this.employee == null ? "" : this.employee.joiningdate, Validators.compose([Validators.required])),
       departmentname: new FormControl(this.employee == null ? "" : this.employee.departmentname, Validators.compose([Validators.required])),
       releivingdate: new FormControl(this.employee == null ? "" : this.employee.releivingdate, Validators.compose([Validators.required])),
       photocode: new FormControl(this.employee == null ? "" : this.employee.photocode, Validators.compose([Validators.required]))
       
     });
   }
 
   submit = (employee: any) => {
     let apiurl = "employees/save";
     let data = this.api.post(apiurl, { data: employee });
     data.subscribe((mydata: any) => {
       this.router.navigate(["admin/employees"]);
     });
   }
 
 

}
