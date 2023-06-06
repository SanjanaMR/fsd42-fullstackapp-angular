import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  cats: any;
  cartItems: any;


  constructor(private service: CustService) {

    
    this.cartItems = [];

    this.cats = [
      {id: 1001, name:'bombay cat',               price:25000.00, imagePath:'assets/images/cbb.jpeg',     description:'gs'},
      {id: 1002, name:'british',                  price:30000.00, imagePath:'assets/images/cbr.jpeg',     description:'bd'},
      {id: 1003, name:'persian',                  price:15000.00, imagePath:'assets/images/cpr.jpg',    description:'lbr'},
      {id: 1004, name:'ragdoll',                  price:30499.00, imagePath:'assets/images/crd.jpg',    description:'gr'},
      {id: 1005, name:'forwegian forest cat',     price:70000.00, imagePath:'assets/images/cnf.jpg',     description:'hs'}
      
    ];

  }  
  
  
  ngOnInit() {
    
  }
  addToCart(cat: any) {

    // this.service.addToCart(cat);

    
   this.cartItems.push(cat);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  

 


}
}