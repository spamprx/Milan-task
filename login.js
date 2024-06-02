// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDiTFohaJXm91EfliIHCmnaTjd0PliwMzE",
  authDomain: "milanregister-4a61e.firebaseapp.com",
  projectId: "milanregister-4a61e",
  storageBucket: "milanregister-4a61e.appspot.com",
  messagingSenderId: "291385972947",
  appId: "1:291385972947:web:9d663fc516f2970c029c26",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the authentication instance
const auth = getAuth(app);

auth.languageCode = "en";

// Create a new Google authentication provider instance
const provider = new GoogleAuthProvider();

// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", () => {
  const googleLogin = document.getElementById("googleSignInButton");

  if (googleLogin) {
    googleLogin.addEventListener("click", function () {
      // Initiate the Google Sign-In popup
      signInWithPopup(auth, provider)
        .then((result) => {
          // Get the Google credential and user object from the result
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const user = result.user;

          console.log(user);

          const emailInput = document.getElementById("email");

          emailInput.value = "";

          // Set the user's email in the email input field
          emailInput.value = user.email;

          alert(`Logged in as ${user.email}`);
        })
        .catch((error) => {
          // Get the error code and message from the error object
          const errorCode = error.code;
          const errorMessage = error.message;

          alert("Login failed: " + errorMessage);
        });
    });
  } else {
    // Log an error if the Google Sign-In button is not found
    console.error("Google Sign In Button not found");
  }
});
