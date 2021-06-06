import { Product } from 'src/interfaces/model';
import {
  ProductDetailsActions,
  ProductDetailsActionTypes,
} from '../actions/product-details.actions';

export interface ProductDetailsState {
  productDetails: Array<Product>;
}

export const initialState: ProductDetailsState = {
  productDetails: [],
};

export function productDetailsReducer(
  state: ProductDetailsState = initialState,
  action: ProductDetailsActions
): ProductDetailsState {
  switch (action.type) {
    case ProductDetailsActionTypes.addProductDetails:
      return {
        ...state,
        productDetails: [...state.productDetails, action.productDetail],
      };

    case ProductDetailsActionTypes.removeProductDetails:
      return {
        ...state,
        productDetails: state.productDetails.filter(
          (item) => item.id !== action.removeid
        ),
      };

    case ProductDetailsActionTypes.updateProductDetails:
      return {
        ...state,
        productDetails: state.productDetails.map((item) =>{
          if(item.id == action.updateid){
            return item = action.productDetail;
          }
          return item;
        })
      };

    case ProductDetailsActionTypes.LoadDataLoadsSuccess: {
      return { ...state, productDetails: [...state.productDetails, action.data] };
    }
    case ProductDetailsActionTypes.LoadDataLoadsFailure: {
      return { ...state, productDetails: [...state.productDetails, action.error] };
    }
    default:
      return state;
  }
}
