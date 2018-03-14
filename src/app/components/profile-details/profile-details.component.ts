import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder) { }

  profileForm : FormGroup;

  ngOnInit() {

    this.profileForm = this._formBuilder.group({
      familyName : [null,[Validators.required]],
      familyHead :[null],
      email :[null],
      contactNumber :[null],
      category :[null],
      address :[null],
      city :[null],
      country :[null],
      postalCode :[null],
      aboutFamily :[null]
    })
  }

  saveMember() : any {
    console.log('Update member clicked....');
    console.log(this.profileForm.value);
  }

}
