import { app } from "./firebase.js";
import {
  getFirestore,
  query,
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
const db = getFirestore(app);
const postQuery = query(collection(db, "Books"));
const show = document.getElementById("show");

onSnapshot(postQuery, (snapshot) => {
  show.innerHTML = "";
  snapshot.forEach((doc) => {
    const post = doc.data();
    const postId = doc.id;

    show.innerHTML += `
          <h2>${post.Booktitle}</h2>
          <p>${post.Bookprice}</p>
          <button onclick="deleteData('${doc.id}')">Delete</button>
          <a href="details.html?id=${postId}">Read more</a>
      `;
  });
});
