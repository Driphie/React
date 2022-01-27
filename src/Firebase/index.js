import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHWKhHhi7R2VYaeNWKNNDtO09F1CZlTio",
  authDomain: "tinedadehamburgesas.firebaseapp.com",
  projectId: "tinedadehamburgesas",
  storageBucket: "tinedadehamburgesas.appspot.com",
  messagingSenderId: "902263246297",
  appId: "1:902263246297:web:48af60b4673f75db52ddc8",
  measurementId: "G-Y39S1C0BM9"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
