import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

  constructor() {
    console.log("Empty Constructor");
    console.warn("warn constructor");
    console.error("error constructor")
    console.info("info constructor")
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
   
  name =  "mani"
  email = "hello@gmail.com"
  userdetails = [{name: 'mani', age:33, dob: '10/11/1990'},
    {name: 'sukanya', age:29, dob: '02/12/1994'}
  ]

  bindEmail(event: any) {
    this.email = event.target.value;
  }
  
  
}

