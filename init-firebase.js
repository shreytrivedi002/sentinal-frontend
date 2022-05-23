
// import firebase from 'firebase/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCE1N_RXqGLQ0AHmkVIAgP6CJxtP06LKL8",
    authDomain: "sentinal-be68b.firebaseapp.com",
    projectId: "sentinal-be68b",
    storageBucket: "sentinal-be68b.appspot.com",
    messagingSenderId: "764457768585",
    appId: "1:764457768585:web:bdb5c9d7d35d5da4225858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
