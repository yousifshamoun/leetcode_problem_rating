import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA4ebo4l1OeaA2v14kGCO5own9p6ujSeME',
  authDomain: 'leetcode-3c128.firebaseapp.com',
  projectId: 'leetcode-3c128',
  storageBucket: 'leetcode-3c128.appspot.com',
  messagingSenderId: '225646376684',
  appId: '1:225646376684:web:0a31059c43cebbcdf9d7c9',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
