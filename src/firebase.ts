import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: 'leetcode-3c128.firebaseapp.com',
  projectId: 'leetcode-3c128',
  storageBucket: 'leetcode-3c128.appspot.com',
  messagingSenderId: '225646376684',
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
