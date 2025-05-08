import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApKy2lSipGPvcAl97MjfBYmCi5aTYgo0M",
  authDomain: "spacemars-ae4c2.firebaseapp.com",
  projectId: "spacemars-ae4c2",
  storageBucket: "spacemars-ae4c2.appspot.com",
  messagingSenderId: "280070773722",
  appId: "1:280070773722:web:3b9db90a7bcb3129e9bee3",
  measurementId: "G-XMD0GJ8ZZK",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
