import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ItemGraficoComponent } from './item-grafico/item-grafico.component';
import { SobreComponent } from './sobre/sobre.component';
import { AuthenticationService } from './core/auth/authentication.service';
import { AuthGuard } from './core/guard/auth-guard';
import { MockDataBase } from './core/database/mockDatabase';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    MenuComponent,
    ItemGraficoComponent,
    SobreComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    MockDataBase,
  ],
  bootstrap: [AppComponent],
  
}

)

export class AppModule { 
  
}
