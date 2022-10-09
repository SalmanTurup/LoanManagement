import { Component, OnInit } from '@angular/core';

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
      applicantName: 'Salman'
    }
  ];
  selectedForm: any;

  constructor() { }

  ngOnInit(): void {
    this.selectedForm = this.applicantArray[0];
  }

  getForm(index: number) {
    this.selectedForm = this.applicantArray[index];
  }

  addApplicant() {
    this.applicantArray.push({ id: this.applicantArray.length, type: 'Secondary', applicantName: 'Bhavesh' });
  }

}
