import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit{
  parentData=["a","b","c"];
  parentObj={
    fname:"shilpa",
    lname:"eppa"
  }
  datafromChild!:string;
  @ViewChild(ChildComponent) childComp!:any;
  dataFromChild!:string;
  GetDataFromChild(data:string){
    this.datafromChild=data;
  }

  ngOnInit() {
    setTimeout(() => {
      this.parentData[0]= "data from Parent";
    }, 5000);
}
ngAfterViewInit(): void {
  this.dataFromChild=this.childComp.exampleInput;
}
}