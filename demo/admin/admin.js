import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { app } from "../main/firebase.js";

const db = getFirestore(app);

const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let booktitle = document.getElementById("book-title").value;
  let bookdesc = document.getElementById("book-desc").value;
  let bookprice = document.getElementById("book-price").value;
  let bookinstock = document.getElementById("book-instock").value;

  try {
    const docRef = await addDoc(collection(db, "Books"), {
      Booktitle: booktitle,
      Bookdescription: bookdesc,
      Bookprice: bookprice,
      Bookinstock: bookinstock,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

const form2 = document.getElementById("form2");
form2.addEventListener("submit", async (e) => {
  e.preventDefault();

  let mangatitle = document.getElementById("manga-title").value;
  let mangadesc = document.getElementById("manga-desc").value;
  let mangaprice = document.getElementById("manga-price").value;
  let mangainstock = document.getElementById("manga-instock").value;

  try {
    const docRef = await addDoc(collection(db, "Manga"), {
      Mangatitle: mangatitle,
      Mangadescription: mangadesc,
      Mangaprice: mangaprice,
      Mangainstock: mangainstock,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

const form3 = document.getElementById("form3");
form3.addEventListener("submit", async (e) => {
  e.preventDefault();

  let scifititle = document.getElementById("scifi-title").value;
  let scifidesc = document.getElementById("scifi-desc").value;
  let scifiprice = document.getElementById("scifi-price").value;
  let scifiinstock = document.getElementById("scifi-instock").value;

  try {
    const docRef = await addDoc(collection(db, "Scifi"), {
      Scifititle: scifititle,
      Scifidescription: scifidesc,
      Scifiprice: scifiprice,
      Scifiinstock: scifiinstock,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

const show = document.getElementById("show");
async function getData() {
  show.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "Books"));
  querySnapshot.forEach((doc) => {
    show.innerHTML += `
      <h2>${doc.data().Booktitle}</h2>
      <p>${doc.data().Bookdescription}</p>
      <p>${doc.data().Bookprice}</p>
      <p>${doc.data().Bookinstock}</p>
      <button onclick="deleteData1('${doc.id}')">Delete</button>
      `;
  });
}
window.deleteData1 = async function (id) {
  try {
    await deleteDoc(doc(db, "Books", id));
    location.reload();
  } catch (error) {
    console.log(error);
  }
};
getData();

const show2 = document.getElementById("show2");
async function getData2() {
  show2.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "Manga"));
  querySnapshot.forEach((doc) => {
    show2.innerHTML += `
      <h2>${doc.data().Mangatitle}</h2>
      <p>${doc.data().Mangadescription}</p>
      <p>${doc.data().Mangaprice}</p>
      <p>${doc.data().Mangainstock}</p>
      <button onclick="deleteData2('${doc.id}')">Delete</button>
      `;
  });
}
window.deleteData2 = async function (id) {
  try {
    await deleteDoc(doc(db, "Manga", id));
    location.reload();
  } catch (error) {
    console.log(error);
  }
};
getData2();

const show3 = document.getElementById("show3");
async function getData3() {
  show3.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "Scifi"));
  querySnapshot.forEach((doc) => {
    show3.innerHTML += `
      <h2>${doc.data().Scifititle}</h2>
      <p>${doc.data().Scifidescription}</p>
      <p>${doc.data().Scifiprice}</p>
      <p>${doc.data().Scifiinstock}</p>
      <button onclick="deleteData3('${doc.id}')">Delete</button>
      `;
  });
}
window.deleteData3 = async function (id) {
  try {
    await deleteDoc(doc(db, "Scifi", id));
    location.reload();
  } catch (error) {
    console.log(error);
  }
};
getData3();
