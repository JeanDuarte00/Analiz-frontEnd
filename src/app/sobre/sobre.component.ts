import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  alunos: any[] = [
    {'nome': 'Jean Duarte', 'descricao': 'tesxto', 'linkedin': 'www.google.com'},
    {'nome': 'Jean Duarte', 'descricao': 'tesxto', 'linkedin': ''},
    {'nome': 'Jean Duarte', 'descricao': 'tesxto', 'linkedin': ''},
    {'nome': 'Jean Duarte', 'descricao': 'tesxto', 'linkedin': ''},
    {'nome': 'Jean Duarte', 'descricao': 'tesxto', 'linkedin': ''}
  ];

  constructor() { }

  ngOnInit() {
  }


}
