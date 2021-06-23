import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/Services/api-calls.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  data : any;
  constructor(private apiService: ApiCallsService) {
  apiService.getDetailsData().subscribe(data => this.data = data)
    console.log(this.data);
   }

  ngOnInit(): void {
  }

}
