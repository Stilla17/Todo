import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBhZgWIwznZ3uRgK-NVsVEnRY42OI3OGss",
    authDomain: "movies-73b1e.firebaseapp.com",
    projectId: "movies-73b1e",
    storageBucket: "movies-73b1e.appspot.com",
    messagingSenderId: "667594968944",
    appId: "1:667594968944:web:abe35ff4daa20ba54149b5",
    measurementId: "G-0RCWJBV70C"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export { auth }
