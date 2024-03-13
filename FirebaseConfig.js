// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDk48Zym43xDewcdRiUko5u6O16nESISrg",
  authDomain: "donate-app-81598.firebaseapp.com",
  projectId: "donate-app-81598",
  storageBucket: "donate-app-81598.appspot.com",
  messagingSenderId: "820539038281",
  appId: "1:820539038281:web:7fb6707219f41b88d7bd98"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)