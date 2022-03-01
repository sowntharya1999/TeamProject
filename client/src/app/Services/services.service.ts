import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMasterMaintenance } from '../Models/master-maintenance';
import { IMasterType } from '../Models/master-type';
import { IUsermaintenance } from '../Models/usermaintenance';
import { IChart1 } from '../Models/IChart1';
import { Icompanyfilter } from '../Models/icompanyfilter';
import { Istatusfilter } from '../Models/istatusfilter';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {
    console.log("Coming from service");
  }
  //get
  GetMasterTypeMaintenance(): Observable<IMasterType[]> {
    return this.http.get<IMasterType[]>("http://localhost:8080/api/getAllMasterType");
  }
  //get
  GetMasterMaintenance(): Observable<IMasterMaintenance[]> {
    return this.http.get<IMasterMaintenance[]>("http://localhost:8080/api/getAllMasterMaintenance");
  }

 
  //getfiltervalues
  Getfiltervalues(): Observable<Icompanyfilter[]> {
    return this.http.get<Icompanyfilter[]>("http://localhost:8080/api/getfiltervalues");
  }

   //getfiltervalues
   GetStatusfiltervalues(): Observable<Icompanyfilter[]> {
    return this.http.get<Icompanyfilter[]>("http://localhost:8080/api/getstatusfiltervalues");
  }

  //post
  SaveNewCategory(category: IMasterMaintenance) {

   return this.http.post("http://localhost:8080/api/addNewMasterMaintenanceData", category);
   }
   SaveMasterType(category: IMasterType) {

    return this.http.post("http://localhost:8080/api/addNewMasterTypeData", category);
    }

    GetUserMaintenance(): Observable<IUsermaintenance[]> {

      return this.http.get<IUsermaintenance[]>("http://localhost:8080/api/getAllUserMaintenance");
  
    }
//     getAllChartdata(): Observable<IChart1[]> {
// return this.http.get<IChart1[]>("http://localhost:8080/api/getAllChartdata");
//       }

     
    
    SaveUserData(User: IUsermaintenance) {
    
          return this.http.post("http://localhost:8080/api/addNewUserMaintenance", User);
          }
          UpdateUserMaintain(User: IUsermaintenance) {
    
            return this.http.put("http://localhost:8080/api/UpdateUserMaintenance", User);
            }
  //  RemoveMasterType(MasterTypeID: IMasterType) {
  //    console.log(MasterTypeID)
  //   return this.http.delete("http://localhost:8080/api/MasterTypeDelete/" + MasterTypeID);
    
  // }
  RemoveMasterType(MasterTypeID: number) {
    return this.http.delete("http://localhost:8080/api/MasterTypeDelete/" + MasterTypeID );
  }

  GetMasterTypeID(MasterTypeID:number): Observable<IMasterType[]> {
    return this.http.get<IMasterType[]>("http://localhost:8080/api/getAllMasterTypeID/" + MasterTypeID);
  }

  GetMasterMasterID(MasterID:number): Observable<IMasterMaintenance[]> {
    return this.http.get<IMasterMaintenance[]>("http://localhost:8080/api/getAllMasterMaintenanceID/" + MasterID);
  }

  GetUserMasterID(UserID:number): Observable<IUsermaintenance[]> {
    return this.http.get<IUsermaintenance[]>("http://localhost:8080/api/getuserById/" + UserID);
  }
  
  RemoveMasterMasterMaintenence(MasterTypeID: number) {
    return this.http.delete("http://localhost:8080/api/MasterMaintenenceDelete/" + MasterTypeID );
  }
  
  //chart
  getAllchart(): Observable<IChart1[]> {

    return this.http.get<IChart1[]>("http://localhost:8080/api/getAllchart");
    
          }
  
   UpdateMasterType(masterTYPE : IMasterType) {

 console.log(masterTYPE);
        
return this.http.put("http://localhost:8080/api/updateMasterTypeDetails", masterTYPE);
        
  }

  UpdateMasterDescription(mastermaintenance : IMasterMaintenance) {

    console.log(mastermaintenance);
           
   return this.http.put("http://localhost:8080/api/updateMasterMaintenenceDetails", mastermaintenance);
           
     }
  //put
  // UpdateCategory(category : Icategory) {
  //   console.log(category);
  //   return this.http.put("http://localhost:8080/api/HIs/" + category.id, category);
  // }

  // RemoveCategory(id: number) {
  //   return this.http.delete("http://localhost:8080/api/HIs/" + id);
  // }
}
