// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUWXUPrsdGpMz2TPJvBNE6uV5fI6gSX8o",
  authDomain: "activity5and6.firebaseapp.com",
  databaseURL: "https://activity5and6-default-rtdb.firebaseio.com",
  projectId: "activity5and6",
  storageBucket: "activity5and6.appspot.com",
  messagingSenderId: "54241381767",
  appId: "1:54241381767:web:0bb97581b3c88b60431722",
  measurementId: "G-K286XQJRR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);