
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyDDSy7Yu7Kn0kn8biiRBA-n7xoyCdoKpGw",
    authDomain: "tuni-clabs-media.firebaseapp.com",
    projectId: "tuni-clabs-media",
    storageBucket: "tuni-clabs-media.appspot.com",
    messagingSenderId: "851793426958",
    appId: "1:851793426958:web:7b54178c78e02619d89a5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;