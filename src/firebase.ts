// Firebase core
import { initializeApp } from "firebase/app";

// Firebase auth (OTP needs this)
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgDj7yxec5AGlRqogyBNOwP1LO6SC8Blk",
  authDomain: "otp-verification-855ac.firebaseapp.com",
  projectId: "otp-verification-855ac",
  storageBucket: "otp-verification-855ac.firebasestorage.app",
  messagingSenderId: "56602392692",
  appId: "1:56602392692:web:e97f4bc36ee5c564923921",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth (THIS IS IMPORTANT)
export const auth = getAuth(app);
