import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCR-IOx6pKkcpNbBKq2dCaJucT-yCwDCYA",
  authDomain: "fashionhub-d33f8.firebaseapp.com",
  projectId: "fashionhub-d33f8",
  storageBucket: "fashionhub-d33f8.firebasestorage.app",
  messagingSenderId: "51426583759",
  appId: "1:51426583759:web:24817ee76ca90713e603ba",
  measurementId: "G-N7NY4JQ2KK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };