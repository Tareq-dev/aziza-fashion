// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCHpl2JwNNLEToQSBwERgsiLguENdLW2D8",
  authDomain: "aziza-fashion.firebaseapp.com",
  projectId: "aziza-fashion",
  storageBucket: "aziza-fashion.appspot.com",
  messagingSenderId: "51755088929",
  appId: "1:51755088929:web:fe90c63d31590133407760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;