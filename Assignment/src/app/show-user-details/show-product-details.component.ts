import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RemoveProductDetails } from '../actions/product-details.actions';
import { selectProductDetailList, State } from '../reducers';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.scss'],
})
export class ShowUserDetailsComponent implements OnInit {
  productDetails: any = [];

  constructor(private store: Store<State>, private route: Router,private http: HttpClient) {
    store.select(selectProductDetailList).subscribe((details) => {
      this.productDetails = details;
    });
  }

  ngOnInit(): void {
  }
  deleteItem(itemId:number){
    this.store.dispatch(new RemoveProductDetails(itemId,this.productDetails));
  }
  updateItem(itemId:number){
    this.route.navigate([`add/${itemId}`]);
  }

  search(searchKey:any){
    let url=`https://run.mocky.io/v3/1ed1a4f3-5325-4168-97de-db55465be079`;
    this.http.get(url);
  }

}
