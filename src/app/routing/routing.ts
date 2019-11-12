import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import {HomePageComponent} from '../componentes/home-page/home-page.component';
import {LoginPageComponent} from '../componentes/login-page/login-page.component';
import { NavbarComponent } from '../componentes/navbar/navbar.component';
import { PrivatePageComponent } from '../componentes/private-page/private-page.component';
import { RegisterPageComponent } from '../componentes/register-page/register-page.component';
import {AuthGuard} from '../auth.guard';
 
const routes: Routes=[
  //rotes principalzz
 
  { path: 'home-page', component: HomePageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'private-page', component: PrivatePageComponent, canActivate:[AuthGuard] },
  { path: 'register-page', component: RegisterPageComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }