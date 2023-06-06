import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';
import { ToastrService } from 'ngx-toastr';
import { EncryptService } from '../encrypt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  countries:any;
  customers:any;
  customer:any;
  regForm: any;
  constructor(private service: CustService,private encr:EncryptService,private toastr: ToastrService) {
    this.customer = {custId:'', custName:'', country:'', address:'', gender:'', dor:'', mobNo:'', emailId:'', password:'', confirmPassword:''};
  }
  
  ngOnInit(){
    this.service.getAllCountries().subscribe((countriesData: any) => {
      this.countries = countriesData;
      console.log(countriesData);
    });
    this.getDate();
  }
  minDate:any="";
getDate(){
  var date:any = new Date();
  var toDate:any = date.getDate();
  if(toDate < 10){
    toDate = "0" + toDate;
  }
  var month:any = date.getMonth() + 1;
  if(month < 10){
    month = "0" + month;
  }
  var year:any = date.getFullYear();
  this.minDate = year + "-" + month + "-" + toDate;
  console.log(this.minDate);
  }

  register(regForm: any) {
    
       console.log(regForm);
       this.customer.custId = regForm.custId;
       this.customer.custName = regForm.custName;
       this.customer.country = regForm.country;
       this.customer.address = regForm.address;
       this.customer.gender = regForm.gender;
       const currentDate=new Date();
       this.customer.dor = currentDate;
       this.customer.mobNo = regForm.mobNo;
       this.customer.emailId = regForm.emailId;
       const hashedPassword     = this.encr.encryptPassword(regForm.password);
      this.customer.password = hashedPassword;
      this.customer.confirmPassword=hashedPassword;
      
      console.log(this. customer);
      this.service.registerCustomer(this.customer).subscribe((result: any) => {
        console.log(result);
        this.toastr.success("Registered Successfully");

      });
    }
  }
  

 


