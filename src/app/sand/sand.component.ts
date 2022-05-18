import { InterpolationConfig, sanitizeIdentifier } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter, Sanitizer } from '@angular/core';
import { StudentService } from '../student.service';




@Component({
  selector: 'app-sand',
  templateUrl: './sand.component.html',
  styleUrls: ['./sand.component.scss']
})
export class SandComponent implements OnInit {
  public name = 'dmKADKaDakdnkdn';
  public dit =false;
  public choose = "ten";
  public array =[1,2,3,4,5,6,7,8,9,10]
  @Input() public parentmsg:any;
  @Output() public child = new EventEmitter();
  public names = "dileep";
  public mess = "This Is Dileep Kumar";
  public obj = {
    name:"dileep",
    age:"28",
    gender:"Male"
  }
  public num = "5.134";
  public date= new Date();
  public student =[] as any;
  constructor(private _sat: StudentService) { }

  ngOnInit() {
     this._sat.getStudents().subscribe(dat => this.student = dat)
  }
  onClick(){
    this.child.emit("This Is From Child");
  }

}