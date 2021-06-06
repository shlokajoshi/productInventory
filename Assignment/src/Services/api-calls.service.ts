import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/interfaces/model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient,private router:Router) { }

  setDetailsData(body: Product){
    let url=`https://run.mocky.io/v3/1ed1a4f3-5325-4168-97de-db55465be079`;
    return this.http.post(url,body);
  }
  getDetailsData(){
    let url=`https://run.mocky.io/v3/1ed1a4f3-5325-4168-97de-db55465be079`;
    //can add get api url and body to get saved data
    return this.http.get(url);
  }

  login(username: string, password: string) {  
    if (username == "admin" && password == "pass@123") {  
       localStorage.setItem('currentUser', "loggedin");  
    }
  }  
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  }  
}
