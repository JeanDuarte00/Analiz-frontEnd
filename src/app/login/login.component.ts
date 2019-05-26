import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/auth/authentication.service';
import { UserLogin } from '../shared/model/user/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLogin;
  mensagemLogin: String;

  ngOnInit(): void {

    this.user = new UserLogin();
    this.mensagemLogin = ' ';
  }

  constructor( private autenticationService: AuthenticationService ) {
  }


  login() {

    if ( this.user.email === undefined || this.user.password === undefined || this.user.email === '' || this.user.password === ''  ) {
      this.mensagemLogin = 'Código e Senha são obrigatorios.';

    } else {
      this.mensagemLogin = this.autenticationService.login( this.user );
    }

  }

  validateCode() {
    const regex = new RegExp('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3})$');
    // if finds non number, shall halt
    if ( !regex.test(this.user.email) ) {
      this.mensagemLogin = 'E-mail no formato invalido';
      document.getElementById('login').focus();
    }
  }



}
