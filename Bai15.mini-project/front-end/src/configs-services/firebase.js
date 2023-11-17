// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARo5ta1xdobkRNYdgwYiBS0bHNj7CcueQ",
  authDomain: "project-reactjs-3580e.firebaseapp.com",
  projectId: "project-reactjs-3580e",
  storageBucket: "project-reactjs-3580e.appspot.com",
  messagingSenderId: "899314303267",
  appId: "1:899314303267:web:06dfc82c16030955110c96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storeFirebase = getStorage(app)