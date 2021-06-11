import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceGuard } from 'src/Services/auth-service.guard';
import { ShowUserDetailsComponent } from './show-user-details/show-product-details.component';
import { AddProductDetailsComponent } from './add-product-details/add-product-details.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {path : '', component:  InventoryComponent,canActivate: [AuthServiceGuard]},
  // {path : 'add', component:  AddProductDetailsComponent,canActivate: [AuthServiceGuard]},
  {path : 'add/:updateid',component:  AddProductDetailsComponent,canActivate: [AuthServiceGuard]},
  {path : 'show', component:  ShowUserDetailsComponent ,canActivate: [AuthServiceGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductDetailsRoutingModule { }
