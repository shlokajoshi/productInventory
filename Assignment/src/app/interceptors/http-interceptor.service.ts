import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{
  public headers = new HttpHeaders();

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
    let token = localStorage.getItem('token');
    
    if(token){
      req = req.clone({headers:req.headers.set('token',token)});
    }
    return next.handle(req).pipe(map((event:HttpEvent<any>)=>{
      if(event instanceof HttpResponse){
        console.log(event+"=> Response");
      }
      return event;
    },(error:any)=>{
      if(error instanceof HttpErrorResponse){
        if(error.status == 401){
          this.router.navigate(['login']);
        }
      }
    }))
  }
}
