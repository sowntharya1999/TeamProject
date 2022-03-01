import { Component, OnInit } from '@angular/core';
import { IMasterType } from '../Models/master-type';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-master-type-edit',
  templateUrl: './master-type-edit.component.html',
  styleUrls: ['./master-type-edit.component.css']
})
export class MasterTypeEditComponent implements OnInit {

  Temp: any =  sessionStorage.getItem("MasterTypeID");

  MasterID:number = parseInt(this.Temp);
  
  MasterTypeID:IMasterType[]=[];

  inputAlertVisible2:any = false;
  inputAlertVisible1:any=false;
 
  user: IMasterType = {} as IMasterType;




  constructor(private Userservices: ServicesService,private router:Router) { 
    Userservices.GetMasterTypeID(this.MasterID).subscribe((p) => { this.MasterTypeID = p; });
   
  }
 

  ngOnInit(): void {
  
  }


  UpdateDetail(): void {
   var txtmastertypedescription = this.MasterTypeID[0].MasterTypeDescription;
 var  status=this.MasterTypeID[0].Status;
    if((txtmastertypedescription == '' ) ){
     
      this.inputAlertVisible1 = true;
     }
     else{
       this.inputAlertVisible1 = false;
     }
    
     if (status == ''){
       this.inputAlertVisible2 = true;
     }else{
      this.inputAlertVisible2 = false;
    }
    if(txtmastertypedescription != '' && status != ''){
    this.user.MasterTypeID = this.MasterID
    this.user.MasterTypeDescription= txtmastertypedescription;
    this.user.Status = status;
    
    this.user.CreatedBy=350586;
    this.user.CreatedDate="2022-12-02T00:00:00.000Z";
    this.user.ModifiedBy=350586;
    this.user.ModifiedDate="2022-12-02T00:00:00.000Z";

    this.Userservices.UpdateMasterType(this.user).subscribe(res => { console.log(res); });
    alert("Updated Successfully...");
  }
}

}

