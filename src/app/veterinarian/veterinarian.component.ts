import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-veterinarian',
  templateUrl: './veterinarian.component.html',
  styleUrls: ['./veterinarian.component.css']
})
export class VeterinarianComponent implements OnInit {
 
  veterinarian:any;
  

  constructor(private service: CustService,private toastr: ToastrService) {

    this.veterinarian = {Id:'',  petType:'',petBreed:'',petGender:'', petAge:'',appointmentDate:'', mailAdd:''};
    
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

    this.veterinarian.Id = regForm.Id;
    this.veterinarian.petType = regForm.petType;
    this.veterinarian.petBreed= regForm.petBreed;
    this.veterinarian.petGender = regForm.petGender;
    this.veterinarian. petAge = regForm. petAge;
    this.veterinarian.appointmentDate = regForm.appointmentDate;
    this.veterinarian.mailAdd = regForm.mailAdd;
  
    
    console.log(this. veterinarian);

    this.service.registerVeterinarian(this.veterinarian).subscribe((result: any) => {
      console.log(result);
      this.toastr.success(" Appointment Done Successfully");
    });


}
}
