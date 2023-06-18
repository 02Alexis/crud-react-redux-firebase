// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkBFVAtQ8f-rmvg6CUw032w-BlPule_QE",
  authDomain: "example-front4.firebaseapp.com",
  projectId: "example-front4",
  storageBucket: "example-front4.appspot.com",
  messagingSenderId: "671096662584",
  appId: "1:671096662584:web:6eefd69778be54b1f714cd",
  measurementId: "G-5Y8R4H1QH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);