// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoHhS7P6Apl6VlWGnhwRm7Ie_hxjHwg6I",
  authDomain: "contact-9591e.firebaseapp.com",
  projectId: "contact-9591e",
  storageBucket: "contact-9591e.appspot.com",
  messagingSenderId: "1016672581781",
  appId: "1:1016672581781:web:51ec34680f823da3dd439c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);