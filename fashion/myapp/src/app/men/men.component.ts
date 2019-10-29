import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
msg: string=" ";
onAddCart(){
  this.msg="Product Added In A Cart";
}
msgs: string=" ";
onAddCar(){
  this.msgs="Product Added In A Cart";
}
msgss: string=" ";
onAddCa(){
  this.msgss="Product Added In A Cart";
}
msgsss: string=" ";
onAdd(){
  this.msgsss="Product Added In A Cart";
}
}
