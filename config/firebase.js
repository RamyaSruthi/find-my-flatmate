// config/firebase.js
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC-ID0AaZtlqrSy3I-LZtXduGqUc3laxg0",
  authDomain: "findmyflatmate-71fe0.firebaseapp.com",
  projectId: "findmyflatmate-71fe0",
  storageBucket: "findmyflatmate-71fe0.firebasestorage.app",
  messagingSenderId: "282816844127",
  appId: "1:282816844127:web:c6b6c29f3764a000f1a6ea",
  measurementId: "G-K8BCT9S3NQ"
};

const app = initializeApp(firebaseConfig);

// ✅ Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
