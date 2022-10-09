import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
   mobile:String='123456789';
  constructor( private route:Router) { }

  ngOnInit(){
  }

  onClick(mob: String, id: string, name: string,){
  // if(this.mobile==mob && id=='ser@gmail.com' && name=='salmanturup'){
    this.route.navigate(["primary-user"])
  // }else{
  //   this.route.navigate(["primary-user"])
  // }
  }

}
