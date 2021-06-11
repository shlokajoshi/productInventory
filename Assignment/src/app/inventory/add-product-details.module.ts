import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductDetailsRoutingModule } from './add-product-details-routing.module';
import { AddProductDetailsComponent } from './add-product-details/add-product-details.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShowUserDetailsComponent } from './show-user-details/show-product-details.component';

//material 
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [AddProductDetailsComponent, InventoryComponent, ShowUserDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddProductDetailsRoutingModule,
    MatTabsModule
  ],
  exports:  [AddProductDetailsComponent,AddProductDetailsRoutingModule]
})
export class AddUserDetailsModule { }

