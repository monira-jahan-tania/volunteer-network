// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQa8g9Duhj7kFbl0QXuBoIQusSrr5EXfQ",
  authDomain: "volunteer-network-a1887.firebaseapp.com",
  projectId: "volunteer-network-a1887",
  storageBucket: "volunteer-network-a1887.appspot.com",
  messagingSenderId: "230305611507",
  appId: "1:230305611507:web:f293aefb5ab17754340186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
