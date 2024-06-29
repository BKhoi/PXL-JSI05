import {
  app,
  auth,
  getAuth,
  createUserWithEmailAndPassword,
} from "../main/firebase.js";
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
        window.location.href = "../login/signin.html";
        // ...
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
