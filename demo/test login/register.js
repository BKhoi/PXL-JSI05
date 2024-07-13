import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQPJz9BT7vkKdsqBusApp0W4gQQDj7pMs",
  authDomain: "fir-9c77e.firebaseapp.com",
  projectId: "fir-9c77e",
  storageBucket: "fir-9c77e.appspot.com",
  messagingSenderId: "379374211188",
  appId: "1:379374211188:web:bf251e225fa38c3c9dc121",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const register = document.getElementById("register");
register.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email.length == 0 || password.length == 0) {
    alert("Fill in the empty blanks");
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        // ...x
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }
  register.reset();
});
