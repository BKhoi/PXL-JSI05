// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkgrAYJSrGyoAeO9bXuDl7XRG5xiFIxtM",
  authDomain: "sign-up-873d0.firebaseapp.com",
  projectId: "sign-up-873d0",
  storageBucket: "sign-up-873d0.appspot.com",
  messagingSenderId: "614812081624",
  appId: "1:614812081624:web:04b8e50830df24bb2fa6ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const register = document.getElementById("register");
register.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (password.length < 6) {
    alert("password needs more than 6 characters");
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
});
