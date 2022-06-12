// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWXY05xk3DvO9yrBKYSJrplCVLZFzBikU",
  authDomain: "tutor-87a3c.firebaseapp.com",
  projectId: "tutor-87a3c",
  storageBucket: "tutor-87a3c.appspot.com",
  messagingSenderId: "33096040283",
  appId: "1:33096040283:web:a795832e2276db2138247e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;