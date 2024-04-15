// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFM4HaMtE5V_GRv6kBpkBG8e_jdoXnNyQ",
  authDomain: "stay-haven.firebaseapp.com",
  projectId: "stay-haven",
  storageBucket: "stay-haven.appspot.com",
  messagingSenderId: "558936539528",
  appId: "1:558936539528:web:5e7967cfe5dbebd7897a3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;