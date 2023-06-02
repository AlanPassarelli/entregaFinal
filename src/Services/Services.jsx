import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs93hj6xWrQPIkBC2jDbdyR3ifk61qN84",
  authDomain: "the-table-game.firebaseapp.com",
  projectId: "the-table-game",
  storageBucket: "the-table-game.appspot.com",
  messagingSenderId: "675437111391",
  appId: "1:675437111391:web:ee817fc9f35cd510f853ea"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);