import {
  getFirestore,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { app } from "../main/firebase.js";
const db = getFirestore(app);
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

console.log(postId);

// async function getTitleDetails(id) {
//   try {
//     const docRef = doc(db, "Books", id);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       const content = docSnap.data();
//       document.getElementById("title").innerHTML = content.title;
//       document.getElementById("body").innerHTML = content.body;
//     } else {
//       console.log("No such document!");
//       document.getElementById("output").innerHTML = "Product not found!";
//     }
//   } catch (error) {
//     console.error("Error fetching:", error);
//     document.getElementById("output").innerHTML =
//       "Error loading title details.";
//   }
// }
// getTitleDetails(postId);
