import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const Providers = { google: new GoogleAuthProvider() }

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}