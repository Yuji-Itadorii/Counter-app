import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyASrOBz-2vPWrXJ_gSysve0OpJiAicoOnM",
  authDomain: "my-counter-app-938c3.firebaseapp.com",
  projectId: "my-counter-app-938c3",
  storageBucket: "my-counter-app-938c3.appspot.com",
  messagingSenderId: "802670424996",
  appId: "1:802670424996:web:79c471d850b1406f2c4731",
  measurementId: "G-QP8F9JY0KH"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);