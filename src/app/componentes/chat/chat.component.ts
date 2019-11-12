import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../servicios/chat.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
public mensaje: string;
  constructor(public chatServices: ChatService ) {
    this.chatServices.cargeMennsage()
    .subscribe();
   }

  ngOnInit() {
  }

  onEnterMenssage(){

    if( this.mensaje.length === 0){
      return;
    }
    this.chatServices.addMenssge(this.mensaje)
    .then(()=>console.log('Send Menssage'))
    .catch((err)=> console.error('Sorry not Send :(', err));
    
this.mensaje="";
  }
}
