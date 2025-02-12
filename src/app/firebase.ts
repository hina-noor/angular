// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAWUiZo9mc1P2C941vDmfUQQUbkdmUgNPY",
  authDomain: "ecommerce-2e9c8.firebaseapp.com",
  projectId: "ecommerce-2e9c8",
  storageBucket: "ecommerce-2e9c8.firebasestorage.app",
  messagingSenderId: "368816442115",
  appId: "1:368816442115:web:cc4dd000d89ef07a523736"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// src/app/firebase.ts
// import { initializeApp, getApp, getApps } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// // Your web app's Firebase configuration
// export const firebaseConfig = {
//   apiKey: "AIzaSyAWUiZo9mc1P2C941vDmfUQQUbkdmUgNPY",
//   authDomain: "ecommerce-2e9c8.firebaseapp.com",
//   projectId: "ecommerce-2e9c8",
//   storageBucket: "ecommerce-2e9c8.appspot.com",
//   messagingSenderId: "368816442115",
//   appId: "1:368816442115:web:cc4dd000d89ef07a523736"
// };

// // Initialize Firebase (only if it hasn't been initialized yet)
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// // Initialize Firestore
// export const db = getFirestore(app);
