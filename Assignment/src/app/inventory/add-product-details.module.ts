import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductDetailsRoutingModule } from './add-product-details-routing.module';
import { AddProductDetailsComponent } from './add-product-details/add-product-details.component';



@NgModule({
  declarations: [AddProductDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddProductDetailsRoutingModule
  ],
  exports:  [AddProductDetailsComponent,AddProductDetailsRoutingModule]
})
export class AddUserDetailsModule { }

