import { Component, OnInit } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }

  
  id="curve_chart1";
  title = 'Grafico 1';
  type = 'LineChart';
  data = [
     ["Jan",  7.0, -0.2],
     ["Feb",  6.9, 0.8],
     ["Mar",  9.5,  5.7],
     ["Apr",  14.5, 11.3],
     ["May",  18.2, 17.0],
     ["Jun",  21.5, 22.0],
     ["Jul",  25.2, 24.8],
     ["Aug",  26.5, 24.1],
     ["Sep",  23.3, 20.1],
     ["Oct",  18.3, 14.1],
     ["Nov",  13.9,  8.6],
     ["Dec",  9.6,  2.5]
  ];

  columnNames = ["Month", "Tokyo", "New York"];
  options = {   
     hAxis: {
        title: 'Month'
     },
     vAxis:{
        title: 'Temperature'
     },
  };
  width = 550;
  height = 400;


  // id="curve_chart2";
  // title = 'Grafico 2';
  // type = 'LineChart';
  // data = [
  //    ["Jan",  7.0, -0.2],
  //    ["Feb",  6.9, 0.8],
  //    ["Mar",  9.5,  5.7],
  //    ["Apr",  14.5, 11.3],
  //    ["May",  18.2, 17.0],
  //    ["Jun",  21.5, 22.0],
  //    ["Jul",  25.2, 24.8],
  //    ["Aug",  26.5, 24.1],
  //    ["Sep",  23.3, 20.1],
  //    ["Oct",  18.3, 14.1],
  //    ["Nov",  13.9,  8.6],
  //    ["Dec",  9.6,  2.5]
  // ];
  // columnNames = ["Month", "Tokyo", "New York"];
  // option = {   
  //    hAxis: {
  //       title: 'Month'
  //    },
  //    vAxis:{
  //       title: 'Temperature'
  //    },
  // };
  // width = 550;
  // height = 400;


}

