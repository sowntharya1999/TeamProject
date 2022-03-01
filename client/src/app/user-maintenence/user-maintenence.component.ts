import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUsermaintenance } from '../Models/usermaintenance';
import { Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { MatSelectChange } from '@angular/material/select';
import { IMasterType } from '../Models/master-type';
import { IMasterMaintenance } from '../Models/master-maintenance';
import { Icompanyfilter } from '../Models/icompanyfilter';
import { CreateUserComponent } from '../create-user/create-user.component';


@Component({
  selector: 'app-user-maintenence',
  templateUrl: './user-maintenence.component.html',
  styleUrls: ['./user-maintenence.component.css']
})
export class UserMaintenenceComponent  {
  Temp: any =  sessionStorage.getItem("UserId");

  Userid:number = parseInt(this.Temp);

  User: IUsermaintenance = {} as IUsermaintenance;
  user:IUsermaintenance[]=[];
  users: IUsermaintenance = {} as IUsermaintenance;
mastertype:IMasterType []=[];
mastermaintain:IMasterMaintenance = {} as IMasterMaintenance
mastermaintain1:IMasterMaintenance [] = []
companyfilter:Icompanyfilter[] = []
arr:Array<string>=[];
add:number = 0;
UserMaintainId:number=0;

   constructor(private dialogRef:MatDialog,private MasterService:ServicesService,private UserService:ServicesService, private router:Router) { 
    UserService.GetUserMaintenance().subscribe((p) => { this.user = p; } );
    UserService.GetMasterMaintenance().subscribe((mm) => { this.mastermaintain1 = mm; });
    UserService.Getfiltervalues().subscribe((f) => {this.companyfilter = f;});

   }

   selectbtn(){
     console.log(this.companyfilter);
    console.log(this.mastermaintain1.length);
    
    this.dialogRef.open(CreateUserComponent);
    
    for(let i =0;i<this.mastermaintain1.length;i++)
    {
     if(this.mastermaintain1[i].MasterTypeID == 1024)
     {
      this.arr[this.add] = this.mastermaintain1[i].Description;
      this.add++; 
      
     }
   }
   console.log(this.arr);
   }
  // MasterTypeID:any;
 
click()
{
  
}
selected(change:MatSelectChange) {
//  // console.log(this.mastermaintain1[0].MasterTypeID);
//  for(let i =0;i<this.mastermaintain1.length;i++)
//  {
//   if(this.mastermaintain1[i].MasterTypeID == 1024)
//   {
//    this.arr[this.add] = this.mastermaintain1[i].Description;
//    this.add++; 
   
//     // this.UserMaintainId = change.value.MasterTypeID;
//     // // console.log("hi");
//     // console.log( change.value.MasterTypeID);
//   }
//   //console.log(change.value.Description);
  
//   // console.log(change.value.Description);

//   // console.log(change.value.MasterTypeID)

// //  this.UserMaintainId = change.value.MasterTypeID;

// //  console.log(this.UserMaintainId);
  }


   ngOnInit(): void {

  }
  psw:string="@123";
result:string="";
  title = 'angular-app';
 
  
  txtUserCode:any = ""

  txtUserName:any = ""

  txtemail :any ="";

  txtcompany: any="";

  txtstatus: any="";

  txtusercode:any;
  txtusername:any;

  inputAlertVisible:any = false;

  inputAlertVisible1:any=false;
  
  
    // Delete(UserName:any){
    //   this.UserService.RemoveUser(this.User.UserName).subscribe(res => console.log(res));
    //   console.log(this.User.UserName);
    //   alert("Deleted Successfully");
    // }
  
  reset() {
    this.txtUserCode = ""
    this.txtUserName = ""
    this.txtcompany = ""
    this.txtemail = ""
    this.txtstatus = ""

  
   }
   UpdateDetail(): void {

    this.users.UserId= 40;
    this.users.UserCode =this.txtusercode;
    this.users.UserName = this.txtusername;
    this.users.Email =  this.txtemail;
    this.users.StatusID = 112;
    this.users.Password="sownth@123"
    this.users.CreatedBy=350586;
    this.users.CreatedDate="2022-12-02T00:00:00.000Z";
    this.users.ModifiedBy=350586;
    this.users.ModifiedDate="2022-12-02T00:00:00.000Z";

    this.UserService.UpdateUserMaintain(this.users).subscribe(res => { console.log(res); });
    alert("Updated Successfully...");
  }



  delete(){

    alert("Do you want to delete?");

  }
}

