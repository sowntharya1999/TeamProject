import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { Icompanyfilter } from '../Models/icompanyfilter';
import { IMasterMaintenance } from '../Models/master-maintenance';
import { IMasterType } from '../Models/master-type';
import { IUsermaintenance } from '../Models/usermaintenance';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  Temp: any =  sessionStorage.getItem("UserId");

  Userid:number = parseInt(this.Temp);

  User: IUsermaintenance = {} as IUsermaintenance;
  user:IUsermaintenance[]=[];
  users: IUsermaintenance = {} as IUsermaintenance;
mastertype:IMasterType []=[];
mastermaintain:IMasterMaintenance = {} as IMasterMaintenance
mastermaintain1:IMasterMaintenance [] = []
companyfilter:Icompanyfilter[] = []
Statusfilter:Icompanyfilter[] = []
arr:Array<string>=[];
add:number = 0;
UserMaintainId:number=0;
  
  
   psw:string="@123";
  result:string="";
    title = 'angular-app';
   
    
    txtUserCode:any = ""
  
    txtUserName:any = ""
  
    txtemail :any ="";
  
    txtcompany: string="";
  
    txtstatus: any="";
  
    txtusercode:any;
    txtusername:any;
  
    inputAlertVisible:any = false;
  
    inputAlertVisible1:any=false;



  constructor(private UserService:ServicesService) 
  { 
    UserService.Getfiltervalues().subscribe((f) => {this.companyfilter = f;});
     UserService.GetStatusfiltervalues().subscribe((SF) => {this.Statusfilter = SF;});
  }

  selcompany:number = 0;
  selectestatus:number=0;
  selected(change:MatSelectChange){
    console.log(change.value);
    this.selcompany = change.value.MasterID;
   console.log(this.selcompany);
   
  }
  selectedstatus(change:MatSelectChange){
    this.selectestatus = change.value.MasterID;
   
  }
  
  submit(){

   

    if((this.txtUserCode == '' ) ){

     

     this.inputAlertVisible1 = true;

    }

    else{

      this.inputAlertVisible1 = false;

    }

    if (this.txtUserName == ''){

      this.inputAlertVisible = true;

    }else{

      this.inputAlertVisible = false;

    }
    if (this.txtemail == ''){

      this.inputAlertVisible = true;

    }else{

      this.inputAlertVisible = false;

    }
    if (this.txtcompany == ''){

      this.inputAlertVisible = true;

    }else{

      this.inputAlertVisible = false;

    }
    if (this.txtstatus == ''){

      this.inputAlertVisible = true;

    }else{

      this.inputAlertVisible = false;

    }
   
    if(this.txtUserCode !='' && this.txtUserName !=''  && this.txtemail !='' && this.txtstatus !='')
   // this. User.UserId=8;
    // this.User.StatusID=115; 
    
    this.User.UserCode = this.txtUserCode;
      this.User.UserName = this.txtUserName;
      this.User.Email = this.txtemail;
      this.result=this.txtUserCode+this.psw;

      this.User.Password=this.result;
    this.User.CompanyID = this.selcompany;
    this.User.StatusID=this.selectestatus;
      // this.User.StatusID=this.txtstatus;
      console.log (this.selectestatus);
      
      this.User.CreatedBy=350586;
      this.User.CreatedDate="2022-12-02T00:00:00.000Z";
      this.User.ModifiedBy=350586;
      this.User.ModifiedDate="2022-12-02T00:00:00.000Z";
    
      console.log(this.selcompany);
      console.log(this.selectestatus);

      
      this.UserService.SaveUserData(this.User).subscribe(res => { console.log(res); });
      console.log(this.txtUserName,this.txtcompany,this.selectestatus);
      alert("successfully added!");
      
    }

  ngOnInit(): void {
  }

}
