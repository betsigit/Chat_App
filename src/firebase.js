
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYZremqYrABJuG2nQ8O0vnBkbTGw1Di1U",
  authDomain: "chat-d4c94.firebaseapp.com",
  databaseURL: "https://chat-d4c94-default-rtdb.firebaseio.com",
  projectId: "chat-d4c94",
  storageBucket: "chat-d4c94.appspot.com",
  messagingSenderId: "65173695512",
  appId: "1:65173695512:web:813b8958178fd1a6b6276d"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()