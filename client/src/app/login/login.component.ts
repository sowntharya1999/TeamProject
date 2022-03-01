import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';
import { IUsermaintenance } from '../Models/usermaintenance';
import { UserMaintenenceComponent } from '../user-maintenence/user-maintenence.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user1:UserMaintenenceComponent[] = [];
  user: IUsermaintenance = {} as IUsermaintenance;
  Users_details :IUsermaintenance  [] =[];
  constructor(private router:Router,servicessService:ServicesService) { 
    servicessService.GetUserMaintenance().subscribe((p) => { this.Users_details = p; }
     
      );
  }

  ngOnInit(): void {
  }
  
  exampleInputEmail1:string='';
  exampleInputPassword1:string='';

  inputAlertVisible1:any=false;
  inputAlertVisible2:any=false;
  showPassword:any=false;
  count:number=0;
  WarningMessage:string=""
  User_Name:string=""
  
 
  // Email:string = "sowntharyarangaraj@gmail.com";
  // Password:string = "-2022";
  submit(){



    if(this.exampleInputEmail1 == '' ){

      this.inputAlertVisible1 = true;}

      else {

        this.inputAlertVisible1 = false;

      }



        if(this.exampleInputPassword1 == ''){

          this.inputAlertVisible2 = true;

        }

          else {

            this.inputAlertVisible2 = false;

          }

          if(this.exampleInputEmail1 == "admin@gmail.com" && this.exampleInputPassword1 == "admin@123"){

      this.router.navigate(['/navAdmin'])

      console.log(this.exampleInputEmail1);
    }
    
    // console.log(this.exampleInputEmail1);
    // console.log(this.exampleInputPassword1);
    for(let i=0; i<this.Users_details.length; i++)
    {

      if(this.exampleInputEmail1==this.Users_details[i].Email&& this.exampleInputPassword1==this.Users_details[i].Password)
   {
    this.User_Name = this.Users_details[i].UserName;
    sessionStorage.setItem("UserName",(this.User_Name));
        this.router.navigate(['statuschart']);
      
  this.count++;
            }
     else if(this.count == 0)
      {
 this.WarningMessage = "User or Password invaild";
 }

}

}
}
