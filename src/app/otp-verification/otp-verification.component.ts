import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { window } from 'rxjs';

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
  verify(){
    if(this.mo_otp=="1111"){
      this.toster.success('verify');
      return
    }else{
      this.toster.error('Not verify');
      return
    }
  }
  verify1(){
    if(this.mi_otp=="0000"){
      this.toster.success('verify');
      return
    }else{
      this.toster.error('Not verify');
      return
    }
  }
}
