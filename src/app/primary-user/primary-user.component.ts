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

}