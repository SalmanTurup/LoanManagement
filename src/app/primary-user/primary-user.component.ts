import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';


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
      applicantName: 'Salman turup',
      kyc:"",
      emai_id:"",
      loyality:"",
      extral_id:"",
      ref_id:"",
      address:"",
      addres_type:"",      
      employe_name:"",
      udyam_name:"",
      mobile_number:"",
      doi:"",
      dob:"",
      dedupe_status:"",


    }
  ];
  selectedForm: any;
  route: any;
  id: any;

  constructor( private rot:Router , private appservice:ApplicationService) { }
  
  ngOnInit(): void {
    this.selectedForm = this.applicantArray[0];
    this.selectedForm.ref_id=this.appservice.ref_id;
  }

  getForm(index: number) {
    this.selectedForm = this.applicantArray[index];
  }

  // addApplicant() {
  //   this.applicantArray.push(this.selectedForm[this.applicantArray]);
  // }
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