

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvinkjF9iKfhUX4NBmzm4taIZKGuq8gzM",
  authDomain: "rave-eab26.firebaseapp.com",
  projectId: "rave-eab26",
  storageBucket: "rave-eab26.appspot.com",
  messagingSenderId: "476745524504",
  appId: "1:476745524504:web:aad2cfef05b0de66e5aa6d"
};

// Initialize Firebase

export  const app = initializeApp(firebaseConfig);

export  const db = getFirestore(app)
