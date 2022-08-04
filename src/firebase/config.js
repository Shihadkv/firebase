import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAC1_gu5XfEFinwspoTqDivZslvortnAzY",
    authDomain: "olxdemo-4af3c.firebaseapp.com",
    projectId: "olxdemo-4af3c",
    storageBucket: "olxdemo-4af3c.appspot.com",
    messagingSenderId: "15194425506",
    appId: "1:15194425506:web:00cadfe0459703ad436ffb",
    measurementId: "G-GXEKX6FB33"
  };

const Firebase = initializeApp(firebaseConfig)
export const db = getFirestore(Firebase)