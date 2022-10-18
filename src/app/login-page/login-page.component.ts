import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { ToastrService } from 'ngx-toastr';
// import{UserDataService} from'';


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
    private toster: ToastrService
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
      this.toster.warning('Alphabet is not Allowed');


      return false;
    }
    return true;
  }

  OnlyAlphabetAllowed(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (((charCode >= 65 && charCode <= 90) || (charCode == 32))) {
      return true;
    }
    window.alert('Only Alphabet is Allowed');
    return false;
  }

  onClick() {
    this.route.navigate(["primary-user"])
  }

  post_data(Form:any) {
    if(!Form.valid){
      this.toster.warning("Please Enter Valid Details")
      return
    }
    this.body={
      name:this.mobile_number,
      email:this.email_id,
      mobile:this.u_name
    }
    this.httpAPI.POST("http://localhost:8080/customer/add", this.body).subscribe({
      next: (response) => {
        console.log(response);
        this.route.navigate(["primary-user"])
      },
      error: (error) => { console.log(error) }
    })
  }
}
