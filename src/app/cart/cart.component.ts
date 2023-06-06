import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any;
  // cartItemss:any;
  cartData: any;
  total: number;

  constructor(private service: CustService) {
    this.cartItems = [];
    // this.cartItemss=[];
    this.total = 0;
  }

  ngOnInit() {


    this.cartData = localStorage.getItem('cartItems');
  this.cartItems = JSON.parse(this.cartData);
  this.calculateTotal();
    // this.cartData = localStorage.getItem('cartItems');
    // this.cartData=localStorage.getItem('cartItemss');
    // this.cartItems = JSON.parse(this.cartData);
    // this.cartItemss = JSON.parse(this.cartData);

    // this.cartItems = this.service.cartItems;
    // this.cartItemss = this.service.cartItemss;

    // this.cartItems.forEach((cat: any) => {
    //   this.total = this.total + cat.price;      
    // });

    // this.cartItems.forEach((dog: any) => {
    //   this.total = this.total + dog.price;      
    // });
  }
  calculateTotal() {
    this.total = 0;
    this.cartItems.forEach((item: any) => {
      this.total += item.price;
    });
  }
  
  }



 

