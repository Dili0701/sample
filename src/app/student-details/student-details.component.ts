import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  public student = [] as any;

  constructor(private _stdService: StudentService) { }

  ngOnInit() {
   this._stdService.getStudents().subscribe(datas => this.student = datas);
  }

}
