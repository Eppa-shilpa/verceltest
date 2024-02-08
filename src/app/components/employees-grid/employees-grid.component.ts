import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-employees-grid',
  templateUrl: './employees-grid.component.html',
  styleUrls: ['./employees-grid.component.scss']
})
export class EmployeesGridComponent {
  visible: boolean = false;
  users: any = [{
    firstName: "Adam",
    lastName: "James",
    userName: "Adam James",
    email: "adam.j@gmail.com"
  }, {
    firstName: "Adam",
    lastName: "James",
    userName: "Adam James",
    email: "adam.j@gmail.com"
  }, {
    firstName: "Adam",
    lastName: "James",
    userName: "Adam James",
    email: "adam.j@gmail.com"
  }, {
    firstName: "Adam",
    lastName: "James",
    userName: "Adam James",
    email: "adam.j@gmail.com"
  }, {
    firstName: "Adam",
    lastName: "James",
    userName: "Adam James",
    email: "adam.j@gmail.com"
  }, {
    firstName: "Adam",
    lastName: "James",
    userName: "Adam James",
    email: "adam.j@gmail.com"
  }, {
    firstName: "Adam",
    lastName: "James",
    userName: "Adam James",
    email: "adam.j@gmail.com"
  }, {
    firstName: "Adam",
    lastName: "James",
    userName: "Adam James",
    email: "adam.j@gmail.com"
  }]
  constructor(private messageService: MessageService) {}

  showSuccess() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showInfo() {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showWarn() {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }

  showError() {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }
  showDialog() {
      this.visible = true;
      console.log("exe");
      
  }

}
