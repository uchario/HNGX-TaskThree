// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-2eEZRKL_0kjQQUkKg1Eism2VpZyg9OE",
  authDomain: "react-auth-ec682.firebaseapp.com",
  projectId: "react-auth-ec682",
  storageBucket: "react-auth-ec682.appspot.com",
  messagingSenderId: "1074510145240",
  appId: "1:1074510145240:web:44a603a3b1374ace14d9ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
