
import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import {MatDialog} from '@angular/material/dialog';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { IChart1 } from '../Models/IChart1';
import { ServicesService } from '../Services/services.service';
import { IUsermaintenance } from '../Models/usermaintenance';
@Component({
  selector: 'app-status-chart',
  templateUrl: './status-chart.component.html',
  styleUrls: ['./status-chart.component.css']
})
export class StatusChartComponent implements OnInit {
  barchart: IChart1 = {} as IChart1;
  charts:IChart1[]=[];

  Temp: any =  sessionStorage.getItem("UserName");

  User_Name:string = this.Temp;

 
 user: IUsermaintenance = {} as IUsermaintenance;
  constructor( private dialogRef:MatDialog,private  chartservice:ServicesService) {
    chartservice.getAllchart().subscribe((p) => { this.charts = p; });
    for (let i = 0; i < this.charts.length; i++) {
      console.log(this.charts[i])
    }
   }
   Companyarr: Array<string> =[];
   Activearr: Array<number> = [];
   InActivearr:Array<number>=[];
   cilck() {
     for (let i = 0; i < this.charts.length; i++) {
       
       this.Activearr[i] = this.charts[i].Active;
       this.InActivearr[i]=this.charts[i].InActive;
       this.Companyarr[i] = this.charts[i].Company;
     }
     console.log(this.Activearr);
     Chart.register(...registerables);
     var myChart = new Chart("myChart", {
       type: 'bar',
       data: {
         labels: this.Companyarr,
         datasets: [
           {
             label: "Active",
             backgroundColor: "pink",
             borderColor: "red",
             borderWidth: 1,
 
             data: this.Activearr
           },
           {
             label: "InActive",
             backgroundColor: "lightblue",
             borderColor: "blue",
             borderWidth: 1,
             data: this.InActivearr
 
           },
 
         ]
 
       },
       options: {
         responsive: true,
         maintainAspectRatio: true,
         // barValueSpacing: 20,
 
 
       }
 
     })
     var e = new Chart('mychatChart', {
 
       type: 'pie',
 
       data: {
 
         labels: ['User1', 'User2', 'User3'],
 
         datasets: [
 
           {
 
 
 
             data: [20, 30, 40],
 
             backgroundColor: ["pink", "lightgreen", "lightblue"],
             borderColor: ["red", "green", "blue"],
        borderRadius:0.5,
             label: 'dataset1'
 
           }]
 
       }
 
     })
 
   }
 
   ngOnInit(): void {
 
     
 
     
   };
   

      chatpage(){
        this.dialogRef.open(ChatWindowComponent);
      }
}