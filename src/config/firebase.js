import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBavQxRXBDR80xRT6P4WFRRLN4EIECUcwA",
  authDomain: "la-perla-eb017.firebaseapp.com",
  projectId: "la-perla-eb017",
  storageBucket: "la-perla-eb017.firebasestorage.app",
  messagingSenderId: "497595035961",
  appId: "1:497595035961:web:29d61f1aa7e957189138e8"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;