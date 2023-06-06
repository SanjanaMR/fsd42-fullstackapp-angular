import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent  implements OnInit{

  dogs: any;
  cartItems: any;

  constructor(private service: CustService) {

    this.cartItems = [];

    this.dogs = [
      {id: 1001, name:'german shepherd',    price:5000.00, imagePath:'assets/images/gs.jpg',     description:'gs'},
      {id: 1002, name:'bull dog',           price:23000.00, imagePath:'assets/images/b.jpg',     description:'bd'},
      {id: 1003, name:'labrador retriever', price:10000.00, imagePath:'assets/images/lr.jpg',    description:'lbr'},
      {id: 1004, name:'golden retriever',   price:12499.00, imagePath:'assets/images/gr.jpg',    description:'gr'},
      {id: 1005, name:'husky',              price:35000.00, imagePath:'assets/images/h.jpg',     description:'hs'},
      {id: 1006, name:'chow chow',          price:30000.00, imagePath:'assets/images/cc.jpg',    description:'chch'}
    ];

  }  

  ngOnInit() {
    
  }

  
  addToCart(dog: any) {

    // this.service.addToCarts(dog);

    this.cartItems.push(dog);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }


}
