import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
constructor(private userService:UserService ){

}
users:{fname:string,lname:string,designation:string}[]=[];
  ngOnInit(): void {
   this.users=this.userService.users;
  }

  showDetails(user:{fname:string,lname:string,designation:string}){
  this.userService.showuserDetails(user);
  }
}
