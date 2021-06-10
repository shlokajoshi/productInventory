import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallsService } from 'src/Services/api-calls.service';
import { AuthServiceGuard } from 'src/Services/auth-service.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiservice: ApiCallsService,private router: Router) {
    if(this.apiservice.loggedIn)
    {
      this.router.navigate(['inventory/add']);
    }
   }

  ngOnInit(): void {
  }

  login(username:string,password:string){
    this.apiservice.login(username,password);
  }

}
