import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDRFZfksOdk9yuEzdgy7ZURzqARvCo4R5o",
    authDomain: "shoppingcart-ab9ec.firebaseapp.com",
    projectId: "shoppingcart-ab9ec",
    storageBucket: "shoppingcart-ab9ec.appspot.com",
    messagingSenderId: "977290006251",
    appId: "1:977290006251:web:0aa8b2de9ff96eaf7638ae"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;