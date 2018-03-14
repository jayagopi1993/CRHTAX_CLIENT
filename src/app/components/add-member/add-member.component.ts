import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  members =[];

  constructor() {
     this.members = [];
   }

  ngOnInit() {
  }

  addMember(newMem:string){
    this.members.push(newMem);
  }

  deleteMember(member:string){
    const index: number = this.members.indexOf(member);
    console.log('index of '+member+' is - '+index);
    if (index !== -1) {
        this.members.splice(index, 1);
    }  
  }


}
