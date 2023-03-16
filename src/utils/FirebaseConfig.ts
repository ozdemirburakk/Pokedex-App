// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtRr64bNbV5c2L-YGElgmU-KTAR6jxyck",
  authDomain: "pokedex-bureact.firebaseapp.com",
  projectId: "pokedex-bureact",
  storageBucket: "pokedex-bureact.appspot.com",
  messagingSenderId: "262704878462",
  appId: "1:262704878462:web:c7f13c3504e186ca05592f",
  measurementId: "G-5DP71ZVRYJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
