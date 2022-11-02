import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { ToastrService } from 'ngx-toastr';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  mobile_number: string = "";
  email_id: string = "";
  u_name: string = "";
  body:any;


  constructor(
    private route: Router,
    private httpAPI: HttpService,
    // private userData:UserDataService,
    private toster: ToastrService,
    private appservice:ApplicationService
  ) {

  }

  getUserFormData(data: any) {
    console.warn(data);

  }
  ngOnInit() {
  }

  OnlyNumbersAllowed(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      // window.alert('Alphabet is not Allowed');
      this.toster.error('Alphabet is not Allowed');


      return false;
    }
    return true;
  }

  OnlyAlphabetAllowed(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (((charCode >= 65 && charCode <= 90) || (charCode == 32)) || ((charCode >= 97 && charCode <= 120) || (charCode == 32))) {
      return true;
    }
    this.toster.error('Only Alphabet is Allowed');
    return false;
  }

  onClick() {
    this.route.navigate(["primary-user"])
  }

  post_data(Form:any) {
    if(!Form.valid){
      this.toster.warning("Please Enter Valid Details","Validation error")
      return
    }
    this.body={
      mobile:this.mobile_number,
      email:this.email_id,
      name:this.u_name.toUpperCase()
    }
    this.appservice.ref_id="BIZL000014"
    this.toster.success("You have successfully login","success")
    this.route.navigate(["primary-user"])
    //to remove later
    this.httpAPI.POST("http://localhost:8080/customer/add", this.body).subscribe({
      next: (response) => {
        console.log(response);
        this.appservice.ref_id=response["xyz"]
       this.route.navigate(["primary-user"])
      },
      error: (error) => { console.log(error) }
    })
  }
}
