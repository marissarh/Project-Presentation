// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaZiKSnCwth-t5HAJhZZMswazpV7SWEf4",
  authDomain: "project-presentation-84570.firebaseapp.com",
  projectId: "project-presentation-84570",
  storageBucket: "project-presentation-84570.appspot.com",
  messagingSenderId: "398964440680",
  appId: "1:398964440680:web:f22d944ab11f27a655c5dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db = getFirestore(app);
