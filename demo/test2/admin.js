import { app } from "../test/firebase.js";
import {
  getFirestore,
  query,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const db = getFirestore(app);
const form = document.getElementById("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const instock = document.getElementById("instock").value;
  const desc = document.getElementById("desc").value;
  const img = document.getElementById("img").files[0];

  const storage = getStorage();
  const imgPath = "Books/" + new Date().valueOf();
  const storageRef = ref(storage, imgPath);

  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, img).then(async (snapshot) => {
    console.log("Uploaded a blob or file!");
    const url = await getDownloadURL(storageRef);

    try {
      const docRef = await addDoc(collection(db, "Books"), {
        Booktitle: title,
        Bookprice: price,
        Bookdescription: desc,
        Bookinstock: instock,
        Bookimg: url,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });

  const postQuery = query(collection(db, "Books"));
  const show = document.getElementById("show");

  onSnapshot(postQuery, (snapshot) => {
    show.innerHTML = "";
    snapshot.forEach((doc) => {
      const post = doc.data();
      const postId = doc.id;

      show.innerHTML += `
    <img src="${post.Bookimg}"> 
          <h2>${post.Booktitle}</h2>
          <p>${post.Bookprice}</p>
          <p>${post.Bookdescription}</p>
          <p>${post.Bookinstock}</p>
          <button onclick="deleteData('${doc.id}')">Delete</button>
          <button onclick="editData('${doc.id}')">Edit</button>
      `;
    });
  });

  window.deleteData = async function (id) {
    try {
      await deleteDoc(doc(db, "Books", id));
      console.log("Delete Success");
    } catch (error) {
      console.error(error);
    }
  };
});

window.editData = async function (id) {
  try {
    const newTitle = prompt("New Title");
    const newPrice = prompt("New price");
    await updateDoc(doc(db, "Books", id), {
      Booktitle: newTitle,
      Bookprice: newPrice,
    });
    console.log("Edit Success");
  } catch (error) {
    console.error(error);
  }
};
