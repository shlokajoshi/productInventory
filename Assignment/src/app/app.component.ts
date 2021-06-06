import { Component } from '@angular/core';
import { ApiCallsService } from 'src/Services/api-calls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  
  constructor(private apiservice: ApiCallsService){
    if(this.apiservice.loggedIn){
      this.isLoggedIn =true;
    }
  }
  
  logout(){
    this.isLoggedIn = false;
    this.apiservice.logout();
  }
  title = 'Assignment';
}
