import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.css']
 })

export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public opcao; 

  ngOnInit() { 
   this.opcao = this.route.snapshot.paramMap.get("opcao");
   if (this.opcao == 1) {
      this.opcao = 'Gênero, Raça e Turno de Aluno por IES';
   } else if (this.opcao == 2) {
      this.opcao = 'Alunos concluintes por região';
   } else if (this.opcao == 3) {
      this.opcao = 'Gêneros de aluno por região';
   } else if (this.opcao == 4) {
      this.opcao = 'Alunos oriundos de escola pública';
   } else if (this.opcao == 5) {
      this.opcao = 'Renda familiar de alunos';
   } else if (this.opcao == 6) {
      this.opcao = 'Universidades com maior número de concluintes no ano';
   } else if (this.opcao == 7) {
      this.opcao = 'Universidades Públicas com maior concluintes no ano';
   } else if (this.opcao == 8) {
      this.opcao = 'Universidades Privadas com maior concluintes no ano';
   }
  }

  title = 'Gráfico 1';
  type = 'Histogram';
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
  options1 = {   
     hAxis: {
        title: 'Month'
     },
     vAxis:{
        title: 'Temperature'
     },
  };
  width = 550;
  height = 400;

  title2 = 'Gráfico 2';
  type2 = 'LineChart';
  data2 = [
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
  columnNames2 = ["Month", "Tokyo", "New York"];
  option2 = {   
     hAxis: {
        title: 'Month'
     },
     vAxis:{
        title: 'Temperature'
     },
  };
  width2 = 550;
  height2 = 400;
}