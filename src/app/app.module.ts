import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './MyComponents/first-component/first-component.component';
import { ParentComponent } from './MyComponents/parent/parent.component';
import { ChildComponent } from './MyComponents/child/child.component';
import { AllUsersComponent } from './MyComponents/all-users/all-users.component';
import { UserDetailsComponent } from './MyComponents/user-details/user-details.component';
import { ExampleComponent } from './MyComponents/example/example.component';
import { EmployeesGridComponent } from './components/employees-grid/employees-grid.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentComponent,
    ChildComponent,
    AllUsersComponent,
    UserDetailsComponent,
    ExampleComponent,
    EmployeesGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
