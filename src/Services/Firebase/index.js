// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNOUCtceyy-8-fGl0dGosFGAzYZM9q6M4",
  authDomain: "the-happy-store.firebaseapp.com",
  projectId: "the-happy-store",
  storageBucket: "the-happy-store.appspot.com",
  messagingSenderId: "584885951554",
  appId: "1:584885951554:web:aba4459f90a0e72ddd21db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);