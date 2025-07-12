// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCaM1gVxMeAZi5OoR-CPa7Z5sKynbmCLXQ",
  authDomain: "skillswap-b8bc3.firebaseapp.com",
  projectId: "skillswap-b8bc3",
  storageBucket: "skillswap-b8bc3.firebasestorage.app",
  messagingSenderId: "995167254615",
  appId: "1:995167254615:web:951309f51286aa761b0b12",
  measurementId: "G-10WKEC5NL7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app); // ✅ MUST come after app is initialized
