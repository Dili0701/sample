import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public student= [] as any;
  public date = new Date();

  constructor( private _stdService: StudentService) { }
  @Input() public fruit:any;
  @Output() public help = new EventEmitter();

  ngOnInit()  {
    this._stdService.getStudents().subscribe(datas => this.student = datas);
  }
  onClick(){
    this.help.emit("Give Me 6 Apples");
 }

} 
