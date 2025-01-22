// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA4YpRrNz7NMQn6Wq62NCNEKo703OS7mo",
  authDomain: "urbanfit-23fca.firebaseapp.com",
  projectId: "urbanfit-23fca",
  storageBucket: "urbanfit-23fca.firebasestorage.app",
  messagingSenderId: "481926614938",
  appId: "1:481926614938:web:124d7458b3c2093567f423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);