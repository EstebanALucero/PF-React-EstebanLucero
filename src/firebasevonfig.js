
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDFnZKgxxlC_aXy8AdCjW1IdP57hiYiTLo",
  authDomain: "reaact-proyecto.firebaseapp.com",
  projectId: "reaact-proyecto",
  storageBucket: "reaact-proyecto.appspot.com",
  messagingSenderId: "785583191041",
  appId: "1:785583191041:web:f22ddb1dd09ec242e97c00"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)