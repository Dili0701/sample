import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {

  @Input() public parents:any;
  @Output() public children = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.children.emit("Hi How R U???");
  }

}
