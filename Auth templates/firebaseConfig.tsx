// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Your Firebase config object, which you can get from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyByzrlh0HGNIwIORrxjuCtmaXVhREdC6pQ",
  authDomain: "scene-seer.firebaseapp.com",
  databaseURL: "https://scene-seer-default-rtdb.firebaseio.com",
  projectId: "scene-seer",
  storageBucket: "scene-seer.firebasestorage.app",
  messagingSenderId: "704795184895",
  appId: "1:704795184895:web:9c651e93a60cf0b1dc46ca",
  measurementId: "G-X1FBNFF6C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get Firebase Auth instance
const auth = getAuth(app);

export { auth };