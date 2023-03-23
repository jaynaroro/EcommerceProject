// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//services
getAuth

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA0FmElehdgVF61E2nZzzx51kzTnljQuqU",
  authDomain: "naroro-ecommerce.firebaseapp.com",
  projectId: "naroro-ecommerce",
  storageBucket: "naroro-ecommerce.appspot.com",
  messagingSenderId: "29024849483",
  appId: "1:29024849483:web:c53116fb4d62966157c7ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app