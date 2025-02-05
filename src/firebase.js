// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChqhsYicn9KmqBmXBFaB02AcItqc7GmHM",
  authDomain: "e-commerce-8e826.firebaseapp.com",
  projectId: "e-commerce-8e826",
  storageBucket: "e-commerce-8e826.firebasestorage.app",
  messagingSenderId: "388374572287",
  appId: "1:388374572287:web:8d68c36c53f35a00b2f0ca",
  measurementId: "G-7RD5G8VD14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
