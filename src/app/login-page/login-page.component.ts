import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  mobile_number: String = '123456789';

  constructor(
    private route: Router,
    private httpAPI: HttpService
  ) { }

  ngOnInit() {
      this.httpAPI.GET().subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
     })
  }

  OnlyNumbersAllowed(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      window.alert('Alphabet is not Allowed');

      return false;
    }
    return true;
  }

  OnlyAlphabetAllowed(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 95 && charCode <= 122)) {
      return true;
    }
    window.alert('Only Alphabet is Allowed');
    return false;
  }

  onClick() {
    this.route.navigate(["primary-user"])
  }
}
