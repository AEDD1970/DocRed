import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usuario: any= {};

  constructor(public afAuth: AngularFireAuth) {

   
  }

  //register
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));

    });
  }


  // loginUser
  loginrUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));

    });
  }

  // user if login || logout + dataUser
  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  //logout-section
  logout() {
    return this.afAuth.auth.signOut();
  }

//loginGoogle
loginGoogle(){
  return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
}

}

