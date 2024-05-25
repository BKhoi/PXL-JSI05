import {
  app,
  auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.email);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  }
});

const logoutbtn = document.getElementById("logout");
logoutbtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.href = "../login/signin.html";
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
});
