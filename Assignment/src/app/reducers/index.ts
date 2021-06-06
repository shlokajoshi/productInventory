// import { state } from '@angular/animations';
import {
    ActionReducerMap, createSelector, MetaReducer 
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { productDetailsReducer, ProductDetailsState } from './product-details.reducer';

export interface State {
    productDetails: ProductDetailsState
}

export const reducers: ActionReducerMap<State,any> = {
     productDetails : productDetailsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectProductDetailState = (state: State) => state.productDetails;

export const selectProductDetailList = createSelector(selectProductDetailState,(state: ProductDetailsState)=> state.productDetails);
