import { Component, OnInit } from '@angular/core';
import {Chart, Legend, registerables} from 'chart.js';

@Component({
  selector: 'app-chat-chart',
  templateUrl: './chat-chart.component.html',
  styleUrls: ['./chat-chart.component.css']
})
export class ChatChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    var mychatChart = new Chart("mychatChart", {
   type: 'doughnut',
   
   
   data: {
    labels: [
      "Active",
      "In-Active"
     
     
    ],
    datasets: [
      {
        label: "Caresoft",
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 1,
        data: [10, 5, 6],
        
      },
      {
        label: "IVECO",
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 1,
        data: [4, 7, 3]
      },
      {
        label: "TSM",
        backgroundColor: "lightgreen",
        borderColor: "green",
        borderWidth: 1,
        data: [10,7,4]

      },
      {
        label: "NHBI",
        backgroundColor: "yellow",
        borderColor: "orange",
        borderWidth: 1,
        data: [6,2,4]
      }
    ]
  
  
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    // barValueSpacing: 20,

  
  }

   })

};
}
