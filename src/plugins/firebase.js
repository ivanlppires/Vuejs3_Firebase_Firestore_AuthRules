// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "CoLoQuEsUaChAvEaQuI",
  authDomain: "fmds-aula10.firebaseapp.com",
  projectId: "fmds-aula10",
  storageBucket: "fmds-aula10.appspot.com",
  messagingSenderId: "696692724061",
  appId: "1:696692724061:web:27ea45782f6106ed7098b4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export default db;