import { Action } from '@ngrx/store';
import { Product } from 'src/interfaces/model';

export enum ProductDetailsActionTypes {
  addProductDetails = '[productDetails] Add productDetail',
  removeProductDetails = '[productDetails] Remove productDetail',
  updateProductDetails = '[productDetails] Update productDetail',
  loadProductDetails = '[productDetails] Load productDetail',
  LoadDataLoadsSuccess = '[productDetails] DataLoads Success',
  LoadDataLoadsFailure = '[productDetails] DataLoads Failure'
}

export class AddProductDetails implements Action {
  readonly type = ProductDetailsActionTypes.addProductDetails;
  constructor(public productDetail : Product){}
}

export class RemoveProductDetails implements Action {
  readonly type = ProductDetailsActionTypes.removeProductDetails;
  constructor(public removeid: number,public productDetail : Product){}
}

export class UpdateProductDetails implements Action {
  readonly type = ProductDetailsActionTypes.updateProductDetails;
  constructor(public updateid: number,public productDetail : Product){}
}

export class loadProductDetails implements Action {
  readonly type = ProductDetailsActionTypes.loadProductDetails;
}

export class LoadDataLoadsSuccess implements Action {
  readonly type = ProductDetailsActionTypes.LoadDataLoadsSuccess;
  constructor(public data: any) { }
}

export class LoadDataLoadsFailure implements Action {
  readonly type = ProductDetailsActionTypes.LoadDataLoadsFailure;
  constructor(public error: any) { }
}

export type ProductDetailsActions = AddProductDetails | RemoveProductDetails | UpdateProductDetails | loadProductDetails | LoadDataLoadsSuccess | LoadDataLoadsFailure;
