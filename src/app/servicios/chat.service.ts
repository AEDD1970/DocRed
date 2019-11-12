import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore'
import { Mensaje} from '../interfaz/mensaje'
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
  


 

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats : Mensaje[]=[];
  public usuario: any={};
  

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user => {

      console.log('status of User', user);

      if (!user) {
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
   }

  //getMenssage
  cargeMennsage(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=> ref.orderBy('fecha','asc'));
    return this.itemsCollection.valueChanges()
    .map((mensajes: Mensaje[])=>{
      console.log( mensajes);
      this.chats =mensajes;
    })
  }


  //sendMenssageFireBase
  addMenssge( texto: string){

    let mensaje: Mensaje={

      nombre: this.usuario.nombre,
      mensajes: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid

    }
    return this.itemsCollection.add(mensaje);
  }
}
