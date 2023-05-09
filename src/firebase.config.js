// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrxgiZCGuCiWJ_Dsl_AUL8r1mlPoYQudA",
  authDomain: "house-marketplace-app-f673e.firebaseapp.com",
  projectId: "house-marketplace-app-f673e",
  storageBucket: "house-marketplace-app-f673e.appspot.com",
  messagingSenderId: "1026943087434",
  appId: "1:1026943087434:web:d2cfdd4b342de9d00b47b3",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
