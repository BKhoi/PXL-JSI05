import {
  getFirestore,
  getDoc,
  doc,
  onSnapshot,
  collection,
  query,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { app } from "../main/firebase.js";
const db = getFirestore(app);
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

async function getTitleDetails(id) {
  try {
    const docRef = doc(db, "Books", id);
    const docSnap = await getDoc(docRef);
    const postQuery = query(collection(db, "Books"));

    if (docSnap.exists()) {
      const content = docSnap.data();
      const output = document.getElementById("output");

      output.innerHTML += `
            <h5>${content.Booktitle}</h5>
            <p>${content.Bookprice}</p>
            `;
    } else {
      console.log("No such document!");
      document.getElementById("output").innerHTML = "Product not found!";
    }
  } catch (error) {
    console.error("Error fetching:", error);
    document.getElementById("output").innerHTML =
      "Error loading title details.";
  }
}
getTitleDetails(postId);
