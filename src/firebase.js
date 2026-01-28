import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjuMLz4blavG3-DpCjijqfJxBUCG4dEaE",
  authDomain: "portfolio-push4ck.firebaseapp.com",
  projectId: "portfolio-push4ck",
  storageBucket: "portfolio-push4ck.firebasestorage.app",
  messagingSenderId: "269446474006",
  appId: "1:269446474006:web:6dfd0f1fec43899ca74837",
  measurementId: "G-XKDHQDJ2HW",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
