<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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
  console.log("Firebase Auth initialized:", auth);
</script>
