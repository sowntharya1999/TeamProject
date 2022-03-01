import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { IMasterType } from '../Models/master-type';
import { ServicesService } from '../Services/services.service';
import { MasterTypeEditComponent } from '../master-type-edit/master-type-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { IMasterMaintenance } from '../Models/master-maintenance';

@Component({
  selector: 'app-master-type-maintenence',
  templateUrl: './master-type-maintenence.component.html',
  styleUrls: ['./master-type-maintenence.component.css']
})
export class MasterTypeMaintenenceComponent implements OnInit {
  
  txtMasterType:string = ""
  status:string = ""
  // MasterType :any ="";
  inputAlertVisible:any = false;
  inputAlertVisible1:any=false;
  category: IMasterType = {} as IMasterType;

  Mastertype: IMasterType[]=[];
  mastermaintenance: IMasterMaintenance []=[];
  constructor(private MasterTypeCategory: ServicesService,private router:Router,private dialogRef:MatDialog)
   {
    MasterTypeCategory.GetMasterTypeMaintenance().subscribe((p) => { this.Mastertype = p; });
    MasterTypeCategory.GetMasterMaintenance().subscribe((m) => { this.mastermaintenance = m; });
   }
     
    
  submit() : void{
    
   
    if((this.txtMasterType == '' ) ){
     
     this.inputAlertVisible1 = true;
    }
    else{
      this.inputAlertVisible1 = false;
    }
 
    if (this.status == ''){
      this.inputAlertVisible = true;
      
    }else{
      this.inputAlertVisible = false;
    }
  
    if(this.txtMasterType != '' && this.status != ''){
      this.category.MasterTypeID = 1003;
      this.category.MasterTypeDescription = this.txtMasterType;
      this.category.Status = this.status;
      this.category.CreatedBy = 350551;
      this.category.ModifiedBy = 350551;
    
      
      
      this.MasterTypeCategory.SaveMasterType(this.category).subscribe(res => { console.log(res); });
      alert("Successfully Data recorded!");
   }
  }

  count:number =0;
  DeleteMasterType(MasterTypeID1:number) {
    console.log(MasterTypeID1);
    
    for(let i =0; i<this.mastermaintenance.length;i++)
    {
      if(this.mastermaintenance[i].MasterTypeID == MasterTypeID1)
      {
        alert("The DELETE statement conflicted with the REFERENCE constraint 'fk_mastertypeid'");
        this.count++
      }
      
    }

    if( this.count == 0)
    {
      this.MasterTypeCategory.RemoveMasterType(MasterTypeID1).subscribe(res => console.log(res));
      alert("Record deleted successfully!..")
    }
    
    
  }
  // DeleteCategory(){
  //   this.MasterTypeCategory.RemoveMasterType().subscribe(res => console.log(res));
  //   alert("Deleted Successfully...");
  // }

   reset(){
   this.txtMasterType = " ";
   this.status = " ";
   }
   Update(MasterTypeID:number){
    
    sessionStorage.setItem("MasterTypeID",JSON.stringify(MasterTypeID));
  
   
    this.dialogRef.open(MasterTypeEditComponent);


   }
  
   ngOnInit(): void {
  }

}
