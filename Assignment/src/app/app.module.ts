import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AddUserDetailsModule } from './add-product-details/add-product-details.module';
import { ShowUserDetailsComponent } from './show-user-details/show-product-details.component';
import { HttpClientModule } from '@angular/common/http';
import * as fromProduct from './reducers/product-details.reducer';
import { LoginComponent } from './login/login.component';
import { AuthServiceGuard } from 'src/Services/auth-service.guard';
@NgModule({
  declarations: [
    AppComponent,
    ShowUserDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddUserDetailsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
  ],
  providers: [AuthServiceGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
