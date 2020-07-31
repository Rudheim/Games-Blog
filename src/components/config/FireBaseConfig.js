import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'
import "firebase/auth";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDbszflXwWdZr3XRndVym-4frM7qv8VxGU",
  authDomain: "blef-65f3e.firebaseapp.com",
  databaseURL: "https://blef-65f3e.firebaseio.com",
  projectId: "blef-65f3e",
  storageBucket: "blef-65f3e.appspot.com",
  messagingSenderId: "656155322285",
  appId: "1:656155322285:web:6aa6bb425f9e7e741fe324"
});