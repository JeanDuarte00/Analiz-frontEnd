import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  codigo = '404';
  mensagemDescricao = 'Não conseguimos encontrar a página pesquisada.';
  solucao = 'Voltar para a página inicial';

  ngOnInit() {
  }
}
