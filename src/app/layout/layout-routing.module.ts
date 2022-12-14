import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from './master-layout/master-layout.component';

const routes: Routes = [
  // {path:'' , component: MasterLayoutComponent},
  {path:'',loadChildren:() => import('../customers/customers.module').then(m => m.CustomersModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
