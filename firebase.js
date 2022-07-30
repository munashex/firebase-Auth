import { initializeApp } from "firebase/app";
import {getAuth} from '@firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAVsBFldlcSkVx6UVxF_G76frSrOxXJvOU",
  authDomain: "authentication-f9cc3.firebaseapp.com",
  projectId: "authentication-f9cc3",
  storageBucket: "authentication-f9cc3.appspot.com",
  messagingSenderId: "1091175816524",
  appId: "1:1091175816524:web:9370041c0c1776cc8783e9",
  measurementId: "G-6SQX6TN986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)