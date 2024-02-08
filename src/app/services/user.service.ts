import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users=[
  { fname:'shilpa',lname:'eppa',designation:'FSD'},
  { fname:'keerthi',lname:'eppa',designation:'MBBS'},
  { fname:'deepika',lname:'eppa',designation:'IIT'}
]

onShowDetailsClicked=new EventEmitter<{fname:string,lname:string,designation:string}>();
showuserDetails(user:{fname:string,lname:string,designation:string})
{
  this.onShowDetailsClicked.emit(user);
}
}
