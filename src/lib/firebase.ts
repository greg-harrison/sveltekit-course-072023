import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// As weird as this feels to commit this to a public repo
// Firebase's documentation assures me that this is fine.
const firebaseConfig = {
    apiKey: "AIzaSyBdJZECa01Vmb5Rn9pTfbK2CLy-NtpBISQ",
    authDomain: "svelte-course-072023-2f4eb.firebaseapp.com",
    projectId: "svelte-course-072023-2f4eb",
    storageBucket: "svelte-course-072023-2f4eb.appspot.com",
    messagingSenderId: "103454613967",
    appId: "1:103454613967:web:4c1191c57c92bdcd38f2ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();