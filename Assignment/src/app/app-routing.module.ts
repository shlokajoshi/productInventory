import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceGuard } from 'src/Services/auth-service.guard';
import { AddProductDetailsComponent } from './add-product-details/add-product-details.component';
import { LoginComponent } from './login/login.component';
import { ShowUserDetailsComponent } from './show-user-details/show-product-details.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path : 'login', component:  LoginComponent},
  {path : 'add', component:  AddProductDetailsComponent ,canActivate: [AuthServiceGuard]},
  {path : 'add/:updateid', component:  AddProductDetailsComponent ,canActivate: [AuthServiceGuard]},
  {path : 'show', component:  ShowUserDetailsComponent ,canActivate: [AuthServiceGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
