import { Component, OnInit } from '@angular/core';
import { IUsermaintenance } from '../Models/usermaintenance';
import { ServicesService } from '../Services/services.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  Temp: any =  sessionStorage.getItem("UserId");

  Userid:number = parseInt(this.Temp);

 
  user: IUsermaintenance = {} as IUsermaintenance;


  constructor(private Userservices: ServicesService) { 
    
  }

  ngOnInit(): void {
  }

  UpdateDetail(): void {

    this.user.UserId= this.Userid;
    this.user.UserCode = this.user.UserCode;
    this.user.UserName = this.user.UserName;
    this.user.Email =  this.user.Email;
    this.user.StatusID = this.user.StatusID;
    this.user.CreatedBy=350586;
    this.user.CreatedDate="2022-12-02T00:00:00.000Z";
    this.user.ModifiedBy=350586;
    this.user.ModifiedDate="2022-12-02T00:00:00.000Z";

    this.Userservices.UpdateUserMaintain(this.user).subscribe(res => { console.log(res); });
    alert("Updated Successfully...");
  }

}
