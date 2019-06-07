import { Injectable, EventEmitter, Output, Provider } from '@angular/core';
import { UserLogin } from '../../shared/model/user/UserLogin';
import { Router, OutletContext } from '@angular/router';
import { MockDataBase } from '../database/mockDatabase';

@Injectable()
export class AuthenticationService {

  private autenticado: Boolean = false;
  @Output() menuEmitter = new EventEmitter<boolean>();


  constructor( private router: Router, private database: MockDataBase ) { }

  login (user: UserLogin): String {

    if ( this.isValideUser(user) ) {

      this.autenticado = true;
      this.menuEmitter.emit(true);
      this.router.navigate(['/sobre']);

    } else {

      this.autenticado = false;
      this.menuEmitter.emit(false);
      return 'Impossivel fazer login, senha ou código invalido!';

    }
  }


  logout () {
    this.autenticado = false;
    this.menuEmitter.emit(false);
    sessionStorage.removeItem('session');
  }


  isValideUser (user: UserLogin): boolean {
    console.log("isvalide?", user);
    // TODO: criar conexão com o banco para validar se é valido na base de dados
    if ( this.existUserLogin(user) ) {

      const b64 = btoa(user.email + user.password + new Date().getTime());
      sessionStorage.setItem('session', b64 );

      return true;
    } else {
      return false;
    }

  }

  existUserLogin ( userLogin: UserLogin ) {
    console.log("existUserLogin?", userLogin);

    if ( this.database.find(userLogin) != null ) {
      return true;
    }
    return false;
  }


  isUsuarioAutenticado () {
    console.log("isvalide2?", this.autenticado);
    const token = sessionStorage.getItem('session');
    console.log('isAuth::', token);
    if ( token != '' && token != null ) {
      return true;
    }
    return false;
    // return this.autenticado;
  }

}
