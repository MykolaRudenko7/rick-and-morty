import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//
//
//
//
//
const API_KEY = import.meta.env.VITE_API_KEY;
const VITE_AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const VITE_PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const VITE_STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const VITE_MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const VITE_APP_ID = import.meta.env.VITE_APP_ID;
//
const firebaseConfig = {
  apiKey: 'AIzaSyDIgcLwYwRR2G5QgVvi18a92g7yl8_POrA',
  authDomain: 'testrick-96b86.firebaseapp.com',
  projectId: 'testrick-96b86',
  storageBucket: 'testrick-96b86.appspot.com',
  messagingSenderId: '757603157857',
  appId: '1:757603157857:web:8fdc2c14d97a181012a720',
};
//
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
