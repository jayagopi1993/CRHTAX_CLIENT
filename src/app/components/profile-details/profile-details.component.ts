import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveMember(){
    console.log('Update member clicked....');
  }

}
