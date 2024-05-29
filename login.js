
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiTFohaJXm91EfliIHCmnaTjd0PliwMzE",
  authDomain: "milanregister-4a61e.firebaseapp.com",
  projectId: "milanregister-4a61e",
  storageBucket: "milanregister-4a61e.appspot.com",
  messagingSenderId: "291385972947",
  appId: "1:291385972947:web:9d663fc516f2970c029c26",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const googleLogin = document.getElementById("googleSignInButton");
  if (googleLogin) {
    googleLogin.addEventListener("click", function () {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const user = result.user;
          console.log(user);
          const emailInput = document.getElementById("email");
          emailInput.value="";
          emailInput.value = user.email;
          alert(`Logged in as ${user.email}`);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Login failed: " + errorMessage);
        });
    });
  } else {
    console.error("Google Sign In Button not found");
  }
});