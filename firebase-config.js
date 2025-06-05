import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTlWSmjHPpbRrsXurzorAXKfVEdi3GFVQ",
  authDomain: "memberorderaja.firebaseapp.com",
  projectId: "memberorderaja",
  storageBucket: "memberorderaja.appspot.com",
  messagingSenderId: "181500803408",
  appId: "1:181500803408:web:bcca622ac69800d3615455",
  measurementId: "G-VJ7JXKMECQ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

window.firebaseAuth = firebaseAuth;
window.firebaseDB = firebaseDB;
