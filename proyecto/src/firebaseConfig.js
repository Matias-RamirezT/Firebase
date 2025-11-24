// Importa las funciones necesarias del SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";       // <--- 1. Importar getAuth
import { getFirestore } from "firebase/firestore"; // <--- 2. Importar getFirestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzRQMDDB1h14CsmHUrpnOPZ0oipHGuU1w",
  authDomain: "digiapi-4c960.firebaseapp.com",
  projectId: "digiapi-4c960",
  storageBucket: "digiapi-4c960.firebasestorage.app",
  messagingSenderId: "469634496600",
  appId: "1:469634496600:web:e38116f46376b1123f322d",
  measurementId: "G-MH6XBJMTE5"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 3. Inicializar y Exportar (Named Exports)
export const auth = getAuth(app);         // <--- Inicializar y Exportar auth
export const db = getFirestore(app);      // <--- Inicializar y Exportar db