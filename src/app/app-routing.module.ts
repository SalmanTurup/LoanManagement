import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainUserComponent } from './main-user/main-user.component';
import { OTPVerificationComponent } from './otp-verification/otp-verification.component';
import { PrimaryUserComponent } from './primary-user/primary-user.component';
const routes: Routes = [
  {
    path:"", redirectTo:"/login-page", pathMatch:'full'
  },
  {
    path:"login-page", component:LoginPageComponent
  },
  {
  path :"main-user", component:MainUserComponent
  },
  {
    path:"primary-user", component:PrimaryUserComponent
  },
  {
    path:"otp-verification", component:OTPVerificationComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
