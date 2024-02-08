import { Component } from '@angular/core';
import {UserService} from '../app/services/user.service'
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[UserService,MessageService]
})
export class AppComponent {
  title = 'first-app';
  constructor(private userService:UserService){

  }
}
