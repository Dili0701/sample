import { Component, OnInit } from '@angular/core';
import { NumService } from '../num.service';

@Component({
  selector: 'app-lite',
  templateUrl: './lite.component.html',
  styleUrls: ['./lite.component.scss']
})
export class LiteComponent implements OnInit {
  public student =[] as any;
  constructor(private _sat: NumService) { }

  

  ngOnInit() {
    this._sat.getNum().subscribe(dat => this.student = dat)
 }

}
