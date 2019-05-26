import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  hideMenu = true;
  titulo = 'ANALiZ';

  opcoesMenu = [
    {'nome': 'Sobre', 'endpoint': '/sobre', 'ativo': true},
    {'nome': 'Dashboard', 'endpoint': '/dashboard', 'ativo': true}
  ];

  ngOnInit() {
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    this.hideMenu = false;
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
    this.hideMenu = true;
  }

}
