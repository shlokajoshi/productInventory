import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceGuard } from 'src/Services/auth-service.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path : 'login', component:  LoginComponent},
  {path : 'inventory', loadChildren: () => import('./inventory/add-product-details.module').then(m => m.AddUserDetailsModule) ,canActivate: [AuthServiceGuard]},
  {path :'cart', loadChildren: ()=> import('./cart/cart.module').then(m=> m.CartModule),canActivate: [AuthServiceGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
