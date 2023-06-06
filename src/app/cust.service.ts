import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustService {

  
  // isUserLogged:boolean;
  loginStatus: boolean;
  cartItems: any;
  // cartItemss:any;
  loginInfo:Subject<any> 

  constructor(private http: HttpClient) { 
    this.loginStatus = false;
    this.cartItems = [];
    // this.cartItemss=[];
    this.loginInfo=new Subject();
  }

  addToCart(item: any) {
    // Check if the item already exists in the cart
    if (this.cartItems.includes(item)) {
      console.log("Item already exists in the cart.");
    } else {
      // Add the item to the cart
      this.cartItems.push(item);
    }
  }
  
 

 
  loginInfoStatus():any{
    return this.loginInfo.asObservable();
  }
  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  getAllCustomers(): any {
    return this.http.get('http://localhost:8085/getAllDepartments');
  }


  registerCustomer(cust: any): any {
    return this.http.post('registerCustomer', cust);
  }
  

  registerPetCare(pet: any): any {
    return this.http.post('registerPetCare', pet);
  }

  registerVeterinarian(vet: any): any {
    return this.http.post('registerVeterinarian', vet);
  }


  setUserLoggedIn() {
    this.loginStatus=true;
    this.loginInfo.next(true);
  }

  setUserLoggedOut() {
    this.loginStatus=false;
    this.loginInfo.next(false);
  }

  getLoginStatus(): any {
    return this.loginStatus;
  }
  // getUserLoggedStatus():boolean{
  //   return this.isUserLogged;
  // }

  custLogin(loginForm: any): any {
    return this.http.get('custLogin/' + loginForm.emailId + "/" + loginForm.password).toPromise();
  }
}
 

 

