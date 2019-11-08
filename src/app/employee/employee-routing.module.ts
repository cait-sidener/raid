import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { InvalidIDCanActivateGuard } from './employee-detail/_guards';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  {
    path: 'employees/:id', 
    canActivate: [InvalidIDCanActivateGuard],
    component: EmployeeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
