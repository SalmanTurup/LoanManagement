import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-primary-user',
  templateUrl: './primary-user.component.html',
  styleUrls: ['./primary-user.component.scss']
})
export class PrimaryUserComponent implements OnInit {
  selectedIndex: any = 0;
  applicantArray = [
    {
      id: 0,
      type: 'Primary',
      applicantName: 'Salman turup'
    }
  ];
  selectedForm: any;
  route: any;
  id: any;

  constructor( private rot:Router) { }
  
  ngOnInit(): void {
    this.selectedForm = this.applicantArray[0];
  }

  getForm(index: number) {
    this.selectedForm = this.applicantArray[index];
  }

  addApplicant() {
    this.applicantArray.push({ id: this.applicantArray.length, type: 'Secondary', applicantName: 'Bhavesh bokade' });
  }
  nevigateToOtp(){
    this.rot.navigate(['otp-verification']);
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
    if (((charCode >= 65 && charCode <= 90) || charCode == 32 ) || ((charCode >= 95 && charCode <= 122) || charCode == 32)) {
      return true;
    }
    window.alert('Only Alphabet is Allowed');
    return false;
  }

}