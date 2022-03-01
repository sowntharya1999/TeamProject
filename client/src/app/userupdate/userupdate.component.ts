import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { CreateUserComponent } from '../create-user/create-user.component';
import { Icompanyfilter } from '../Models/icompanyfilter';
import { IMasterMaintenance } from '../Models/master-maintenance';
import { IMasterType } from '../Models/master-type';
import { IUsermaintenance } from '../Models/usermaintenance';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
  Temp: any =  sessionStorage.getItem("UserId1");
  Userid:number = parseInt(this.Temp);

  User:IUsermaintenance[] = [];
  users: IUsermaintenance = {} as IUsermaintenance;
  companyfilter:Icompanyfilter[] = [];
  Statusfilter:Icompanyfilter[] = []
   constructor(private dialogRef:MatDialog,private MasterService:ServicesService,private UserService:ServicesService, private router:Router) { 
    UserService.GetUserMasterID(this.Userid).subscribe((p) => { this.User = p; } );
    UserService.Getfiltervalues().subscribe((f) => {this.companyfilter = f;});
    UserService.GetStatusfiltervalues().subscribe((SF) => {this.Statusfilter = SF;});

   console.log(this.Userid);
   }
   selectestatus:number=0;
   selectedstatus(change:MatSelectChange)
   {
    this.selectestatus = change.value.MasterID;
   
  }

selected(change:MatSelectChange) {
  

  }
  reloadCurrentPage() {
    window.location.reload();
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
  
  
  
  
  reset() {
    this.txtUserCode = ""
    this.txtUserName = ""
    this.txtcompany = ""
    this.txtemail = ""
    this.txtstatus = ""

  
   }
   UpdateUser(): void {

    this.users.UserId= this.Userid;
    this.users.UserCode =this.User[0].UserCode;
    this.users.UserName = this.User[0].UserName;
    this.users.Email =  this.User[0].Email;
    this.users.StatusID = this.selectestatus;
    this.users.Password="sownth@123"
    this.users.CreatedBy=350586;
    this.users.CreatedDate="2022-12-02T00:00:00.000Z";
    this.users.ModifiedBy=350586;
    this.users.ModifiedDate="2022-12-02T00:00:00.000Z";
    console.log(this.users);
    this.UserService.UpdateUserMaintain(this.users).subscribe(res => { console.log(res); });
    alert("Updated Successfully...");
  }



  delete(){

    alert("Do you want to delete?");

  }

}
