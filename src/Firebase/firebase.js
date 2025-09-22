// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxce62xFm1NmFinbykeawaGj07Jo1QfQs",
  authDomain: "mr-guide-e8279.firebaseapp.com",
  projectId: "mr-guide-e8279",
  storageBucket: "mr-guide-e8279.firebasestorage.app",
  messagingSenderId: "819152932490",
  appId: "1:819152932490:web:f961f2e6b7efe44b982773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth};