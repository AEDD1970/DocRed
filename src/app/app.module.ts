import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
//firebase import
import{AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFirestoreModule} from 'angularfire2/firestore'
//component
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivatePageComponent } from './componentes/private-page/private-page.component';
//routing
import { RoutingModule } from './routing/routing';
import { RouterModule } from '@angular/router';
//serviceAuth
import{AuthService} from '../app/servicios/auth.service'
import { from } from 'rxjs';
//serviceChat
import{ChatService} from '../app/servicios/chat.service';
//materialdesing
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
//authenticated guard
import {AuthGuard} from '../app/auth.guard';
import { ChatComponent } from './componentes/chat/chat.component'



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivatePageComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    RoutingModule,
    RouterModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule
   
  ],
  providers: [AuthService, AuthGuard, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
