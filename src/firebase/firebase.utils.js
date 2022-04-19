import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjkAqV8L5cHGQeUnqFQQnhLTgFud1VyHs",
  authDomain: "linkedin-clone-79793.firebaseapp.com",
  projectId: "linkedin-clone-79793",
  storageBucket: "linkedin-clone-79793.appspot.com",
  messagingSenderId: "607160686078",
  appId: "1:607160686078:web:79d58bf9dd49c89a229caf"
};

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()

export {db, auth}