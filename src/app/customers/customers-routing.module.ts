import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersDataComponent } from './components/customers-data/customers-data.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

const routes: Routes = [
  {path:'', redirectTo:'/customers', pathMatch:'full' },
  {path:'customers', component:CustomersDataComponent},
  {path:'edit/:id', component:EditCustomerComponent},
  {path:'addcustomer', component:AddCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
