import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { IMasterMaintenance } from '../Models/master-maintenance';
import { IMasterType } from '../Models/master-type';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-master-maintenence-edit',
  templateUrl: './master-maintenence-edit.component.html',
  styleUrls: ['./master-maintenence-edit.component.css']
})
export class MasterMaintenenceEditComponent implements OnInit {

  Temp: any =  sessionStorage.getItem("MasterID");

  Masterid:number = parseInt(this.Temp);
  Temp1: any =  sessionStorage.getItem("MasterTypeID");

  MasterTypeID:number = parseInt(this.Temp1);
  
  MasterType :IMasterType[]=[];
 
  user: IMasterMaintenance = {} as IMasterMaintenance;
MASterMaintain:IMasterMaintenance[]=[];
 mastertype:string=""
// txtmasterdescription:string=""
// status:string=""
inputAlertVisible1:any=false;
inputAlertVisible2:any=false;
inputAlertVisible:any=false;

  
  constructor(private Userservices: ServicesService) { 
    Userservices.GetMasterTypeMaintenance().subscribe((Mt) => {this.MasterType = Mt;});
    Userservices.GetMasterMasterID(this.MasterTypeID).subscribe((p) => { this.MASterMaintain = p; });
    
  }

  ngOnInit(): void {
  }

  UpdateDetail() {
  //  var mastertype=this.MASterMaintain[0].MasterTypeID;
  var  txtmasterdescription:string=this.MASterMaintain[0].Description;
  var  status:string=this.MASterMaintain[0].Status;
  
    if(txtmasterdescription == ''){
      this.inputAlertVisible1 = true;
    }else{
      this.inputAlertVisible1 = false;
    }
    if(status == ''){
      this.inputAlertVisible2 = true;
     }else{
      this.inputAlertVisible2 = false;
     }
     if(this.mastertype == ""){
      this.inputAlertVisible = true;
    }else{
      this.inputAlertVisible = false;
    }
    if(txtmasterdescription != '' && status != null )
     {
     this.user.MasterID = this.Masterid;
     this.user.MasterTypeID=this.MasterMaintainId;
    this.user.Description= txtmasterdescription;
    this.user.Status = status;
    
    this.user.CreatedBy=350586;
    this.user.CreatedDate="2022-12-02T00:00:00.000Z";
    this.user.ModifiedBy=350586;
    this.user.ModifiedDate="2022-12-02T00:00:00.000Z";
    console.log(this.user);
      // console.log(this.Masterid,this.mastertype,this.txtmasterdescription,this.status);
    this.Userservices.UpdateMasterDescription(this.user).subscribe(res => { console.log(res); });
    alert("Updated Successfully...");
  }
}
MasterMaintainId:number = 0;
selected(change:MatSelectChange) {
  // console.log(change.value.Description);
  // console.log(change.value.MasterTypeID)
 this.MasterMaintainId = change.value.MasterTypeID;
//  console.log(this.MasterMaintainId);
}

}

