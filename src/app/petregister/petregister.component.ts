import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-petregister',
  templateUrl: './petregister.component.html',
  styleUrls: ['./petregister.component.css']
})
export class PetregisterComponent  implements OnInit {

  pets : any;
  pet: any;
  

  
  constructor(private service: CustService,private toastr: ToastrService) {

    this.pet = {petId:'', ownerNAme:'', ownerMail:'', mobNo:'', petType:'', dor:'', petAge:'',petBreed:'', petGender:'', days:''};
    
  }


  ngOnInit() { 
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

    this.pet.petId = regForm.petId;
    this.pet.ownerName = regForm.ownerName;
    this.pet.ownerMail= regForm.ownerMail;
    this.pet.mobNo = regForm.mobNo;
    this.pet.petType = regForm.petType;
    this.pet.dor = regForm.dor;
    this.pet.petAge = regForm.petAge;
    this.pet.petBreed = regForm.petBreed;
    this.pet.petGender=regForm.petGender;
    this.pet.days=regForm.days;
    
    console.log(this. pet);

    this.service.registerPetCare(this.pet).subscribe((result: any) => {
      console.log(result);
      this.toastr.success(" Pet Registered Successfully");
    });

  }






  

}
