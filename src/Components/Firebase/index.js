import app from 'firebase/app';
import React from 'react';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDf6T0RNh-GZD_R8VV7JYfl7edc-KX5xfg",
    authDomain: "quiz-culture-gen.firebaseapp.com",
    projectId: "quiz-culture-gen",
    storageBucket: "quiz-culture-gen.appspot.com",
    messagingSenderId: "104161631393",
    appId: "1:104161631393:web:a041d6469908d7366224e0"
  };


class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig); // initialization of Firbase
        this.auth = app.auth();
    }
    // Signup
    signupUser =(email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }
    // LIGIN
    loginUser =(email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }
    // SIGNOUTH
    signoutUser =() => {
        this.auth.signOut()
    }
}

const MyContext = React.createContext(null);


export default Firebase;
export {MyContext};