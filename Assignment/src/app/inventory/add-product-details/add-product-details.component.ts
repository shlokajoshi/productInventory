import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/interfaces/model';
import {
  AddProductDetails,
  UpdateProductDetails,
} from '../../actions/product-details.actions';
import { selectProductDetailList, State } from '../../reducers';

@Component({
  selector: 'app-add-user-details',
  templateUrl: './add-product-details.component.html',
  styleUrls: ['./add-product-details.component.scss'],
})
export class AddProductDetailsComponent implements OnInit {
  details: Product[] =[];
  isUpdate: boolean = false;
  updateObject: any;
  constructor(
    private store: Store<State>,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.store.select(selectProductDetailList).subscribe((details) => {
      this.details = details;
    });
  }

  productDetailsForm = this.fb.group({
    id: [Math.floor(Math.random() * 100)],
    productName: ['', Validators.required],
    productSku: ['', Validators.required],
    price: ['', Validators.required],
  });

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((item) => {
      if (
        item.updateid !== null &&
        item.updateid !== undefined &&
        this.details.length > 0
      ) {
        this.isUpdate = true;
        this.details.forEach((element: any) => {
          if (element.id == item.updateid) {
            this.updateObject = element;
            this.productDetailsForm.get('id')?.patchValue(element.id);
            this.productDetailsForm.get('productName')?.patchValue(element.productName);
            this.productDetailsForm.get('productSku')?.patchValue(element.productSku);
            this.productDetailsForm.get('price')?.patchValue(element.price);
          }
        });
      }
    });
  }

  addorUpdateProductDetails() {
    if (this.isUpdate) {
      if (this.productDetailsForm.valid) {
        let form = this.productDetailsForm.value as Product;
        this.store.dispatch(
          new UpdateProductDetails(this.updateObject.id, form)
        );
      }
    } else {
      if (this.productDetailsForm.valid) {
        let form = this.productDetailsForm.value as Product;
        this.store.dispatch(new AddProductDetails(form));
      }
    }
    alert('Action Successful!');
    this.router.navigate([`inventory/show`]);
  }
}
