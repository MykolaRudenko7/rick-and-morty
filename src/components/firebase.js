import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
//
//
//
//
//
const API_KEY = import.meta.env.VITE_RICK_AND_MORTY_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'rick-and-morty.firebaseapp.com',
  projectId: 'rick-and-morty-61001',
  storageBucket: 'rick-and-morty-61001.appspot.com',
  messagingSenderId: '475855319140',
  appId: '1:475855319140:web:c02adf7de5bc7ade72ef71',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
