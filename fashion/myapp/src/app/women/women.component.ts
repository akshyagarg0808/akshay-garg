import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

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
