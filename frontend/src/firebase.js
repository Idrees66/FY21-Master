import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3ghE0Wd0hWo-7MCNsHm_CfCNR876Z_uU",
  authDomain: "bucks-3d812.firebaseapp.com",
  projectId: "bucks-3d812",
  storageBucket: "bucks-3d812.appspot.com",
  messagingSenderId: "356481106990",
  appId: "1:356481106990:web:ddf8b5bdcb7a2b937fcbbf",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
