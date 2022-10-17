import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OTPVerificationComponent implements OnInit {
  mob: String = "";
  mo_otp: String = "";
  mail_otp: String = "";
  mi_otp: String = "";


  constructor() { }

  ngOnInit(): void {
  }

}
