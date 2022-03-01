import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router'
import { MasterMaintenenceEditComponent } from '../master-maintenence-edit/master-maintenence-edit.component';
import { IMasterMaintenance } from '../Models/master-maintenance';
import { IMasterType } from '../Models/master-type';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-master-maintenence',
  templateUrl: './master-maintenence.component.html',
  styleUrls: ['./master-maintenence.component.css']
})
export class MasterMaintenenceComponent implements OnInit {
  
  // constructor(private router:Router) { }
@Input() name:string="";
 
  mastertype:any = '' ;
  txtMasterType:string = "";
  statuss:any ='';
  inputAlertVisible1:any=false;
  inputAlertVisible2:any=false;
  inputAlertVisible3:any=false;  
  
  // SaveCategory(): void {
  //    this.category.MasterTypeID = this.mastertype;
  //    this.category.Description = this.txtMasterType;
  //    this.category.Status = this.statuss;
  //    this.category.CreatedBy=350591;
  //    this.category.ModifiedBy=350593;
  //     this.categoryService.SaveNewCategory(this.category).subscribe(res => { console.log(res); });
  //  }
 
  validateMasterMaintenenceform(){

    if(this.txtMasterType == ''){
      this.inputAlertVisible2 = true;
    }else{
      this.inputAlertVisible2 = false;
    }
   if(this.MasterMaintainId == 0){
    this.inputAlertVisible1 = true;
   }else{
    this.inputAlertVisible1 = false;
   }

  

   if(this.statuss == ''){
    this.inputAlertVisible3 = true;
   }else{
    this.inputAlertVisible3 = false;
   }

  if(this.mastertype != '' && this.txtMasterType != null && this.statuss != '')
   {

    this.category.MasterTypeID = this.MasterMaintainId;
    this.category.Description = this.txtMasterType;
    this.category.Status = this.statuss;
    this.category.CreatedBy=350591;
    this.category.ModifiedBy=350593;
     this.categoryService.SaveNewCategory(this.category).subscribe(res => { console.log(res); });

     alert("Successfully Data recorded!")
   }

  


   }
   reset(){
    this.mastertype = " ";
    this.txtMasterType = " ";
    this.statuss = " ";
    }

    category: IMasterMaintenance = {} as IMasterMaintenance;
    MasterType :IMasterType[]=[];
 
  categories: IMasterMaintenance[]=[];
  
  
  constructor(private categoryService: ServicesService,private router:Router,private dialog:MatDialog,private dialogRef:MatDialog) {
    
      categoryService.GetMasterMaintenance().subscribe((p) => { this.categories = p; });
      
  categoryService.GetMasterTypeMaintenance().subscribe((Mt) => {this.MasterType = Mt;});
  
  }
  MasterMaintainId:number = 0;
  selected(change: MatSelectChange) {
    // console.log(change.value.Description);
    // console.log(change.value.MasterTypeID);
   this.MasterMaintainId = change.value.MasterTypeID;
  //  console.log(this.MasterMaintainId);
  }
  DeleteMasterMaintenence(MasterTypeID1:number) {
    console.log(MasterTypeID1);
    //this.categoryService.RemoveMasterMasterMaintenence(MasterTypeID1).subscribe(res => console.log(res));
    //alert("Record deleted successfully!..")
    alert("The DELETE statement conflicted with the REFERENCE constraint 'fk_mastertypeid'");
  }

  // UpdateCategory(): void {
  //   this.category.id = this.txtId;
  //   this.category.Weight = this.txtweight;
  //   this.category.Processor = this.txtprocessor;
  //   this.category.Ram = this.txtram;
    
  //   this.categoryService.UpdateCategory(this.category).subscribe(res => { console.log(res); });
  // }

  // DeleteCategory(): void {
  //   this.categoryService.RemoveCategory(this.txtId).subscribe(res => console.log(res));
  // }
  ngOnInit(): void {
  }

  update(MasterType:string, MasterID:number){
    sessionStorage.setItem("MasterID",JSON.stringify(MasterID));
     sessionStorage.setItem("MasterType",JSON.stringify(MasterType));
   
    this.dialogRef.open(MasterMaintenenceEditComponent);
  }
}



