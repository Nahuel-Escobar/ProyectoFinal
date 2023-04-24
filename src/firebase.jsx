import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDPatmojIpR8DSyUkV4VFPCSKdg1-Zaq4M",
  authDomain: "proyectofinalescobar.firebaseapp.com",
  projectId: "proyectofinalescobar",
  storageBucket: "proyectofinalescobar.appspot.com",
  messagingSenderId: "844835852106",
  appId: "1:844835852106:web:885d8a1d06b6ef23023bb3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app 