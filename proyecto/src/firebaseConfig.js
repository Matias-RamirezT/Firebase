// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };