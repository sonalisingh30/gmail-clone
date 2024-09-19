// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDANwWs2ToM6n6GmgMBKt6ZZfkm-YO8_M8",
  authDomain: "clone-yt-aa702.firebaseapp.com",
  projectId: "clone-yt-aa702",
  storageBucket: "clone-yt-aa702.appspot.com",
  messagingSenderId: "949480718009",
  appId: "1:949480718009:web:749c2cc0302605ecbbe568",
  measurementId: "G-TGYS09DKG2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
