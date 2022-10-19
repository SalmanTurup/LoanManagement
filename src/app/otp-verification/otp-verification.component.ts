import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OTPVerificationComponent implements OnInit {
  mob: String = "";
  mo_otp: String = "";
  g_mail_otp: String = "";
  mi_otp: String = "";


  constructor(private toster: ToastrService) { }

  ngOnInit(): void {
  }
  opt(){
    this.toster.info('OTP SENT');
    return
  }

}
