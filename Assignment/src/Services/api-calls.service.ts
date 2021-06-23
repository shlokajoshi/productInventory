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
    let url=`https://run.mocky.io/v3/2ca32e08-924d-4280-af96-f82cb05a43e2`;
    return this.http.get(url);
  }

  login(username: string, password: string) {  
    if (username == "admin" && password == "pass@123") {  
      
       localStorage.setItem('token', "1092837465");  
    }
    return this.http.get(`https://run.mocky.io/v3/e34927b4-c331-4a69-bbdf-87a8761e42de`);
  }  
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('token') !== null);  
  }  
}
