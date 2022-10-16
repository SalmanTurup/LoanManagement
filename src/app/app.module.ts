import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OTPVerificationComponent } from './otp-verification/otp-verification.component';
import { PrimaryUserComponent } from './primary-user/primary-user.component';
import { SecondaryUserComponent } from './secondary-user/secondary-user.component';
import { MainUserComponent } from './main-user/main-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field'
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpService } from './services/http.service';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
   
    OTPVerificationComponent,
    PrimaryUserComponent,
    SecondaryUserComponent,
    MainUserComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    HttpClientModule,
    
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
