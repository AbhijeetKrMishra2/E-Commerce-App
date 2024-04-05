// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmsciyW_CJlilBzqNQoKPQRmk1be7tV8w",
  authDomain: "e-commerce-app-65a78.firebaseapp.com",
  projectId: "e-commerce-app-65a78",
  storageBucket: "e-commerce-app-65a78.appspot.com",
  messagingSenderId: "548915872898",
  appId: "1:548915872898:web:42b8348b05a7f14e8f209b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;