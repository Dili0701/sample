import { getCurrencySymbol } from '@angular/common';
import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter',
  template: `
    <input id={{hello}} type ="text" value ="propertyBind"><br><br>
    <input bind-disabled="getDisabled" id={{hello}} type ="text" value ="propertyBind">
    <h2 [class]= "color">DileepKumar</h2>
    <h2 [class]= "size">DileepKumar</h2>
    <h2 [class]= "style">DileepKumar</h2>
    <h2 [class.text-color]= "wanted">DileepKumar</h2>
    <h2 [class.text-style]= "wanted">DileepKumar</h2>
    <h2 [class.text-size]= "wanted">DileepKumar</h2>
    <h2 [ngClass] = "obj">DileepKumar</h2>
    <h2 [style.color] ="'red'">Hi This Is Dileep</h2>
    <h2 [style.color] ="colors">Hi This Is Dileep</h2>
    <h2 [style.color] ="want ? 'brown' : 'yellow'">Hi This Is Dileep</h2>
    <h2 [ngStyle] ="obj1">Hi This Is Dileep</h2>
    <button (click)="onClick()"> Click Me!</button>
    <h2>{{but}}</h2>
    <input #msg type="text">
    <button (click)="message(msg.value)"type="button"> Click Me!</button>
   `,
  styles: [`
  p {
    font-size: 30px;
    color: blue;
    text-align:center;
  }
  h2{
    text-align:center;
  }
  .text-color{
    color:red;
  }
  .text-style{
    font-style:italic;
  }
  .text-size{
    font-size:70px;
  }
  `]
})
export class InterComponent implements OnInit {
  public hello = "abc";
  public getDisabled= true;
  public color="text-color";
  public size="text-size";
  public style="text-style";
  public wanted = true;
  public obj = {
    "text-color":this.wanted,
    "text-style":!this.wanted,
    "text-size":this.wanted
  }
  public colors= "blue";
  public want = false;
  public obj1 = {
    color: "green",
    fontSize:"70px",
    fontStyle: "italic"
  }
  public but =""
 
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.but="Hi This Is Dileep";
  }
    message(msg:any){
      console.log(msg);
    }
  
}
