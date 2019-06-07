import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              private router: Router
    ) { }

  hideMenu = true;
  titulo = 'ANALiZ';

  opcoesMenu = [
    {'nome': 'Sobre', 'endpoint': '/sobre', 'ativo': true, 'submenu': false},
    {'nome': 'Dashboard', 'endpoint': '/dashboard', 'ativo': true, 'submenu': false},
    {'nome': 'Gênero, Raça e Turno de Aluno por IES', 'endpoint': '/dashboard/1', 'ativo': true, 'submenu': true},
    {'nome': 'Alunos concluintes por região', 'endpoint': '/dashboard/2', 'ativo': true, 'submenu': true},
    {'nome': 'Gêneros de aluno por região', 'endpoint': '/dashboard/3', 'ativo': true, 'submenu': true},
    {'nome': 'Alunos oriundos de escola pública', 'endpoint': '/dashboard/4', 'ativo': true, 'submenu': true},
    {'nome': 'Renda familiar de alunos', 'endpoint': '/dashboard/5', 'ativo': true, 'submenu': true},
    {'nome': 'Universidades com maior número de concluintes no ano', 'endpoint': '/dashboard/6', 'ativo': true, 'submenu': true},
    {'nome': 'Universidades Públicas com maior concluintes no ano', 'endpoint': '/dashboard/7', 'ativo': true, 'submenu': true},
    {'nome': 'Universidades Privadas com maior concluintes no ano', 'endpoint': '/dashboard/8', 'ativo': true, 'submenu': true},
  ];

  ngOnInit() { 
  }

  logout () {
    this.auth.logout();
    this.router.navigate( ['/login'] );
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '318px';
    document.getElementById('main').style.marginLeft = '250px';
    this.hideMenu = false;
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
    this.hideMenu = true;
  }

  toggleSub() {
    let item = document.getElementsByClassName('sub');
    let length = item.length;

    if (item[0].style.display == 'none') {
      for(var i=0; i<length; i++) {
        item[i].style.display = '';
      }
    } else {
      for(var i=0; i<length; i++) {
        item[i].style.display = 'none';
      }
    }
  }
}
