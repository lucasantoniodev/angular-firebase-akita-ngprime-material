import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

interface UserModel {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public auth: Auth) {}


  verifyToken() {
    return this.auth.currentUser?.getIdTokenResult()
  }

  handleRegister(value: UserModel) {
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  handleLogin(value: UserModel) {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => console.log(err));
  }
}
