import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAtHenuZ_fY_AHwm6408V7DaWCwUzKnYI0",
    authDomain: "fabrix-2c828.firebaseapp.com",
    databaseURL: "https://fabrix-2c828-default-rtdb.firebaseio.com",
    projectId: "fabrix-2c828",
    storageBucket: "fabrix-2c828.firebasestorage.app",
    messagingSenderId: "703319717103",
    appId: "1:703319717103:web:6bef54e96fe69d1959d71a",
    measurementId: "G-DFG6JW7DKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
