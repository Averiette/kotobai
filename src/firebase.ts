// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBiu_1vdIE9zcyqj7jb8Z6dRwnMEBCxic",
  authDomain: "cursuscourse.firebaseapp.com",
  projectId: "cursuscourse",
  storageBucket: "cursuscourse.appspot.com",
  messagingSenderId: "44709142786",
  appId: "1:44709142786:web:030daffdef6abfa5b2e21b",
  measurementId: "G-D45X739FK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Google Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
