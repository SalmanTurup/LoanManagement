import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OTPVerificationComponent } from './otp-verification/otp-verification.component';
import { PrimaryUserComponent } from './primary-user/primary-user.component';
import { SecondaryUserComponent } from './secondary-user/secondary-user.component';
import { MainUserComponent } from './main-user/main-user.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
