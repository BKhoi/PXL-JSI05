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
  let bookimg = document.getElementById("book-img").value;

  try {
    const docRef = await addDoc(collection(db, "Books"), {
      Bookimg: bookimg,
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

const show1 = document.getElementById("show1");
async function getData() {
  show1.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "Books"));
  querySnapshot.forEach((doc) => {
    show1.innerHTML += `
      <div class="col-md-4 col-12">
      <div class="card" style="width: 18rem">
        <a href="../details/detail.html">
          <img
            src="${doc.data().Bookimg}"
            class="card-img-top product-img"
            alt="..."
          />
        </a>
        <div class="card-body">
          <h4 class="card-title name">${doc.data().Booktitle}</h4>
          <div class="card-text">
            <p class="desc"><i> ${doc.data().Bookdescription} </i></p>

            <p></p>
            <p id="price">Price: $${doc.data().Bookprice}</p>
            <p id="instock">In Stock: ${doc.data().Bookinstock}</p>
          </div>
          <button class="delete-btn" onclick="deleteData1('${
            doc.id
          }')">Delete</button>
        </div>
      </div>
    </div>
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
       <div class="col-md-4 col-12">
      <div class="card" style="width: 18rem">
        <a href="../details/detail.html">
          <img
            src=""
            class="card-img-top product-img"
            alt="..."
          />
        </a>
        <div class="card-body">
          <h4 class="card-title name">${doc.data().Mangatitle}</h4>
          <div class="card-text">
            <p class="desc"><i> ${doc.data().Mangadescription} </i></p>

            <p></p>
            <p id="price">Price: $${doc.data().Mangaprice}</p>
            <p id="instock">In Stock: ${doc.data().Mangainstock}</p>
          </div>
          <button class="delete-btn" onclick="deleteData1('${
            doc.id
          }')">Delete</button>
        </div>
      </div>
    </div>
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
       <div class="col-md-4 col-12">
      <div class="card" style="width: 18rem">
        <a href="../details/detail.html">
          <img
            src=""
            class="card-img-top product-img"
            alt="..."
          />
        </a>
        <div class="card-body">
          <h4 class="card-title name">${doc.data().Scifititle}</h4>
          <div class="card-text">
            <p class="desc"><i> ${doc.data().Scifidescription} </i></p>

            <p></p>
            <p id="price">Price: $${doc.data().Scifiprice}</p>
            <p id="instock">In Stock: ${doc.data().Scifiinstock}</p>
          </div>
          <button class="delete-btn" onclick="deleteData1('${
            doc.id
          }')">Delete</button>
        </div>
      </div>
    </div>
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
