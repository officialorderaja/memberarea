import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
  apiKey: "AIzaSyCTlWSmjHPpbRrsXurzorAXKfVEdi3GFVQ",
  authDomain: "memberorderaja.firebaseapp.com",
  projectId: "memberorderaja",
  storageBucket: "memberorderaja.firebasestorage.app",
  messagingSenderId: "181500803408",
  appId: "1:181500803408:web:bcca622ac69800d3615455",
  measurementId: "G-VJ7JXKMECQ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDB = db;
