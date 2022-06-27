import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { WordComponent } from './word/word.component';
import { DocumentComponent } from './document/document.component';
import { DocumentsComponent } from './documents/documents.component';
import { WordsComponent } from './words/words.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin/dashboard",component:DashboardComponent},
  {path:"admin/document/:id",component:DocumentComponent},
  {path:"admin/documents",component:DocumentsComponent},
  {path:"admin/word/:id",component:WordComponent},
  {path:"admin/words",component:WordsComponent},
  {path:"admin/employee/:id",component:EmployeeComponent},
  {path:"admin/employees",component:EmployeesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
