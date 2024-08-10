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
    const docRef = doc(db, "Scifi", id);
    const docSnap = await getDoc(docRef);
    const postQuery = query(collection(db, "Scifi"));

    if (docSnap.exists()) {
      const content = docSnap.data();
      const output = document.getElementById("output");

      output.innerHTML += `
      <div class="wrapper"> 
         <img class="item-img" src="${content.Scifiimg}" alt="..." />
         <div class="details">
            <h1 class="title">${content.Scifititle}</h1>
            <p class="aspects">Price of the book: <span class="price">$${content.Scifiprice}</span></p>
            <p class="desc">Book description: ${content.Scifidescription}</p>
            <p class="notes">Before you buy:</p>
            <p class="notes">+ Physical vs. Digital: Decide if you want a physical copy or an e-book. Consider your reading habits and storage space. Physical books are great for collections, while e-books are convenient for travel.</p>
            <p class="notes">+ Consider the Edition: Be aware of different editions or translations, especially with classics or foreign books. Some editions might have better translations, introductions, or additional content.</p>
            <p class="notes">+ Verify the Price: Compare prices across different retailers. Sometimes, the same book can vary greatly in price depending on the seller.</p>
         </dic>
      </div>
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
