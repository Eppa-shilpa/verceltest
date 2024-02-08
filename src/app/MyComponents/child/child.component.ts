import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() data!: string[];
  @Input() obj!:{fname:string,lname:string};
  @Output() data3=new EventEmitter<string>();
  exampleInput:string="implementing view child";
  sendDataToParent()
  {
    this.data3.emit("Data from Child");
  }
  ngOnChanges(){
    console.log("onChanges method from child component");
  }
  ngOnInit(){
console.log("init method from child component");
  }
  ngDoCheck(){
    console.log("ngDoCheck method from child component");
  }
}
