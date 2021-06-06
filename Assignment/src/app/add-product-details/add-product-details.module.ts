import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductDetailsComponent } from './add-product-details.component';



@NgModule({
  declarations: [AddProductDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:  [AddProductDetailsComponent]
})
export class AddUserDetailsModule { }
