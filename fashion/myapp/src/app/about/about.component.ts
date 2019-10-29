import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
msg:string =" ";
content(){
  this.msg="Browse and select the product OR search and select the product. You can also use your past orders for reordering by making required changes.";
}
index:string =" ";
cont(){
  this.index="You need to be registered and logged in at the time of placing the order. Your email id will be used for sending the order details. For availing of benefits like loyalty points redemption or using a promotion code, you must Sign In";
}
}
