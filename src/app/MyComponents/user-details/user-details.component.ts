import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
constructor(private userService:UserService){

}
user!:{fname:string,lname:string,designation:string};
ngOnInit():void{
this.userService.onShowDetailsClicked.subscribe((data:{fname:string,lname:string,designation:string})=>{
  this.user=data;
})
}
}
