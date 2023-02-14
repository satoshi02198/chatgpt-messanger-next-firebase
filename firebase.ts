import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8KDl6VzRKN4VPfSzN8RL2nVvKBkPQpd4",
  authDomain: "chatgpt-messanger-satohsi.firebaseapp.com",
  projectId: "chatgpt-messanger-satohsi",
  storageBucket: "chatgpt-messanger-satohsi.appspot.com",
  messagingSenderId: "1044861640847",
  appId: "1:1044861640847:web:aacbe2487d530d6de7d0fa",
  measurementId: "G-B4JY81EJMH",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
