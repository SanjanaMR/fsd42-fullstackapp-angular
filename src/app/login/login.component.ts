import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EncryptService } from '../encrypt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  customers: any;
  customer: any;
  emailId:any;
  password:any;
  loggedIn:any
  constructor(private service: CustService, private router: Router,private toastr: ToastrService,
    private encr:EncryptService) {

    this.customers = [
      
        {custId:101, custName:'Ritika',country:'INDIA', address:'hyderabad',gender:'FeMale',mobNo:'9022235881',  emailId:'ritika@gmail.com', password:'Ritika@123', confirmPassword:'Ritika@123'},
      {custId:102, custName:'Aishu',country:'INDIA', address:'Ballarsha',gender:'FeMale',mobNo:'9033335881',  emailId:'Aishu@gmail.com', password:'Aishu@123', confirmPassword:'Aishu@123'},
      
    ]
      
  }

  ngOnInit() {
    // this.authService.authState.subscribe((customer)=>{
    //   this.customer=customer;
    //   this.loggedIn= (customer!=null);
    //   console.log(customer);
    // });

  }

 

  async loginSubmit(loginForm: any) {
    console.log(loginForm);

    if (loginForm.emailId === 'admin123@gmail.com' && loginForm.password === 'Admin123@') {
      this.toastr.success("Welcome to ADMIN Home Page");

      this.service.setUserLoggedIn();
      this.router.navigate(['admin']);

    } else {
      const hashedPassword = this.encr.encryptPassword(loginForm.password);
          loginForm.password = hashedPassword;
          console.log(loginForm);

      await this.service.custLogin(loginForm).then((cust: any) => {
        this.customer = cust;
        console.log(cust);
      });

      // const cust = await this.service.custLogin(loginForm);
      // this.customer = cust;

      if (this.customer != null) {
        this.service.setUserLoggedIn();
        this.router.navigate(['breed']);
        this.toastr.success('User Logged In');
      } else {
        this.toastr.error('Invalid Credentials');
        // this.router.navigate(['/login']);
      }
      //this.customers.forEach((customer: any) => {
      // if(customer.emailId === loginForm.emailId && customer.password === loginForm.password) {
      // this.service.setUserLoggedIn();
      // this.router.navigate(['pets']);
      //alert('csutomer Logged In Successfully')
      // }
      //  });

    }
  }
}
