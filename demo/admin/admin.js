import {
  getFirestore,
  query,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

import { app } from "../main/firebase.js";

const db = getFirestore(app);

const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let booktitle = document.getElementById("book-title").value;
  let bookdesc = document.getElementById("book-desc").value;
  let bookprice = document.getElementById("book-price").value;
  let bookinstock = document.getElementById("book-instock").value;
  const img = document.getElementById("img1").files[0];

  const storage = getStorage();
  const imgPath = "Books/" + new Date().valueOf();
  const storageRef = ref(storage, imgPath);

  uploadBytes(storageRef, img1).then(async (snapshot) => {
    console.log("Uploaded a blob or file!");
    const url = await getDownloadURL(storageRef);

    try {
      const docRef = await addDoc(collection(db, "Books"), {
        Booktitle: booktitle,
        Bookdescription: bookdesc,
        Bookprice: bookprice,
        Bookinstock: bookinstock,
        Bookimg: url,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
});
const postQuery = query(collection(db, "Books"));
const show1 = document.getElementById("show1");
onSnapshot(postQuery, (snapshot) => {
  show1.innerHTML = "";
  snapshot.forEach((doc) => {
    const post = doc.data();
    const postId = doc.id;
    show1.innerHTML += `
   <div class="col-md-4 col-12">
    <div class="card" style="width: 18rem">
      <a href="../details/detail.html">
        <img
          src="${post.Bookimg}"
          class="card-img-top product-img"
          alt="..."
        />
      </a>
      <div class="card-body">
        <h4 class="card-title name">${post.Booktitle}</h4>
        <div class="card-text">
          <p class="desc"><i> ${post.Bookdescription} </i></p>

          <p></p>
          <p id="price">Price: $${post.Bookprice}</p>
          <p id="instock">In Stock: ${post.Bookinstock}</p>
        </div>
        <button class="delete-btn" onclick="deleteData('${doc.id}')">Delete</button>
        <button onclick="editData('${doc.id}')">Edit</button>
      </div>
    </div>
  </div>
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

window.editData = async function (id) {
  try {
    const newTitle = prompt("New Title");
    const newPrice = prompt("New price");
    const newImg = prompt("New Img");
    await updateDoc(doc(db, "Books", id), {
      Booktitle: newTitle,
      Bookprice: newPrice,
      Bookimg: newImg,
    });
    console.log("Edit Success");
  } catch (error) {
    console.error(error);
  }
};

const form2 = document.getElementById("form2");
form2.addEventListener("submit", async (e) => {
  e.preventDefault();
  let mangatitle = document.getElementById("manga-title").value;
  let mangadesc = document.getElementById("manga-desc").value;
  let mangaprice = document.getElementById("manga-price").value;
  let mangainstock = document.getElementById("manga-instock").value;
  const img2 = document.getElementById("img2").files[0];

  const storage = getStorage();
  const imgPath = "Manga/" + new Date().valueOf();
  const storageRef = ref(storage, imgPath);

  uploadBytes(storageRef, img2).then(async (snapshot) => {
    console.log("Uploaded a blob or file!");
    const url = await getDownloadURL(storageRef);

    try {
      const docRef = await addDoc(collection(db, "Manga"), {
        Mangatitle: mangatitle,
        Mangadescription: mangadesc,
        Mangaprice: mangaprice,
        Mangainstock: mangainstock,
        Mangaimg: url,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
});
const postQuery2 = query(collection(db, "Manga"));
const show2 = document.getElementById("show2");
onSnapshot(postQuery2, (snapshot) => {
  show2.innerHTML = "";
  snapshot.forEach((doc) => {
    const post = doc.data();
    const postId = doc.id;
    show2.innerHTML += `
     <div class="col-md-4 col-12">
      <div class="card" style="width: 18rem">
        <a href="../details/detail.html">
          <img
            src="${post.Mangaimg}"
            class="card-img-top product-img"
            alt="..."
          />
        </a>
        <div class="card-body">
          <h4 class="card-title name">${post.Mangatitle}</h4>
          <div class="card-text">
            <p class="desc"><i> ${post.Mangadescription}</i></p>

            <p></p>
            <p id="price">Price: $${post.Mangaprice}</p>
            <p id="instock">In Stock: ${post.Mangainstock}</p>
          </div>
          <button class="delete-btn" onclick="deleteData2('${doc.id}')">Delete</button>
          <button onclick="editData2('${doc.id}')">Edit</button>
        </div>
      </div>
    </div>
      `;
  });
});

window.deleteData2 = async function (id) {
  try {
    await deleteDoc(doc(db, "Manga", id));
    console.log("Delete Success");
  } catch (error) {
    console.error(error);
  }
};

window.editData2 = async function (id) {
  try {
    const newTitle = prompt("New Title");
    const newPrice = prompt("New price");
    await updateDoc(doc(db, "Manga", id), {
      Mangatitle: newTitle,
      Mangaprice: newPrice,
    });
    console.log("Edit Success");
  } catch (error) {
    console.error(error);
  }
};

const form3 = document.getElementById("form3");
form3.addEventListener("submit", async (e) => {
  e.preventDefault();

  let scifititle = document.getElementById("scifi-title").value;
  let scifidesc = document.getElementById("scifi-desc").value;
  let scifiprice = document.getElementById("scifi-price").value;
  let scifiinstock = document.getElementById("scifi-instock").value;
  const img3 = document.getElementById("img3").files[0];

  const storage = getStorage();
  const imgPath = "Scifi/" + new Date().valueOf();
  const storageRef = ref(storage, imgPath);

  uploadBytes(storageRef, img3).then(async (snapshot) => {
    console.log("Uploaded a blob or file!");
    const url = await getDownloadURL(storageRef);

    try {
      const docRef = await addDoc(collection(db, "Scifi"), {
        Scifititle: scifititle,
        Scifidescription: scifidesc,
        Scifiprice: scifiprice,
        Scifiinstock: scifiinstock,
        Scifiimg: url,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
});

const postQuery3 = query(collection(db, "Scifi"));
const show3 = document.getElementById("show3");
onSnapshot(postQuery3, (snapshot) => {
  show3.innerHTML = "";
  snapshot.forEach((doc) => {
    const post = doc.data();
    const postId = doc.id;
    show3.innerHTML += `
   <div class="col-md-4 col-12">
    <div class="card" style="width: 18rem">
      <a href="../details/detail.html">
        <img
          src="${post.Scifiimg}"
          class="card-img-top product-img"
          alt="..."
        />
      </a>
      <div class="card-body">
        <h4 class="card-title name">${post.Scifititle}</h4>
        <div class="card-text">
          <p class="desc"><i> ${post.Scifidescription}</i></p>

          <p></p>
          <p id="price">Price: $${post.Scifiprice}</p>
          <p id="instock">In Stock: ${post.Scifiinstock}</p>
        </div>
        <button class="delete-btn" onclick="deleteData3('${doc.id}')">Delete</button>
        <button onclick="editData3('${doc.id}')">Edit</button>
      </div>
    </div>
  </div>
    `;
  });
});

window.deleteData3 = async function (id) {
  try {
    await deleteDoc(doc(db, "Scifi", id));
    console.log("Delete Success");
  } catch (error) {
    console.error(error);
  }
};

window.editData3 = async function (id) {
  try {
    const newTitle = prompt("New Title");
    const newPrice = prompt("New price");
    await updateDoc(doc(db, "Scifi", id), {
      Scifititle: newTitle,
      Scifiprice: newPrice,
    });
    console.log("Edit Success");
  } catch (error) {
    console.error(error);
  }
};
