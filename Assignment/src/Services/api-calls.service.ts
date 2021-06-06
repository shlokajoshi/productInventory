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
    let url=`https://run.mocky.io/v3/ac3dd43a-0dbd-4a63-8b18-5cac86a161aa`;
    return this.http.post(url,body);
  }
  getDetailsData(){
    let url=`https://run.mocky.io/v3/ac3dd43a-0dbd-4a63-8b18-5cac86a161aa`;
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
