import { app } from "./firebase.js";
import {
  getFirestore,
  query,
  collection,
  onSnapshot,
  doc,
  addDoc,
  getDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
const auth = getAuth();
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../login/signin.html";
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

const db = getFirestore(app);

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
        <a href="../details/detail.html?id=${postId}" target="_blank">
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
        <button type="submit" id="add1" class="addbtn" onclick="addCart1('${postId}')">Add to cart</button>
        </div>
      </div>
    </div>
      `;
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
        <a href="../details2/detail.html?id=${postId}" target="_blank">
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
     <button type="submit" id="add" class="addbtn" onclick="addCart2('${postId}')">Add to cart</button>
        </div>
      </div>
    </div>
      `;
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
      <a href="../details3/detail.html?id=${postId}" target="_blank">
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
      <button type="submit" id="add" class="addbtn" onclick="addCart3('${postId}')">Add to cart</button>
      </div>
    </div>
  </div>
    `;
  });

  const showCart = document.getElementById("showCart");
  window.addCart1 = async function (id) {
    try {
      const docRef = doc(db, "Books", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const content = docSnap.data();
        const docRef = await addDoc(collection(db, "Cart"), {
          Itemtitle: content.Booktitle,
          Itemprice: content.Bookprice,
        });
      } else {
        console.log("No such document!");
        document.getElementById("output").innerHTML = "Product not found!";
      }
    } catch (error) {
      console.error("Error fetching:", error);
      document.getElementById("output").innerHTML =
        "Error loading title details.";
    }
  };
  window.addCart2 = async function (id) {
    try {
      const docRef = doc(db, "Manga", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const content = docSnap.data();
        const docRef = await addDoc(collection(db, "Cart"), {
          Itemtitle: content.Mangatitle,
          Itemprice: content.Mangaprice,
        });
      } else {
        console.log("No such document!");
        document.getElementById("output").innerHTML = "Product not found!";
      }
    } catch (error) {
      console.error("Error fetching:", error);
      document.getElementById("output").innerHTML =
        "Error loading title details.";
    }
  };
  window.addCart3 = async function (id) {
    try {
      const docRef = doc(db, "Scifi", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const content = docSnap.data();
        const docRef = await addDoc(collection(db, "Cart"), {
          Itemtitle: content.Scifititle,
          Itemprice: content.Scifiprice,
        });
      } else {
        console.log("No such document!");
        document.getElementById("output").innerHTML = "Product not found!";
      }
    } catch (error) {
      console.error("Error fetching:", error);
      document.getElementById("output").innerHTML =
        "Error loading title details.";
    }
  };
});

const postQuery4 = query(collection(db, "Cart"));
const showCart = document.getElementById("showCart");
onSnapshot(postQuery4, (snapshot) => {
  showCart.innerHTML = "";
  snapshot.forEach((doc) => {
    const post = doc.data();
    const postId = doc.id;
    showCart.innerHTML += `
    <div class="col-md-4 col-12 itemCart">
   <h5>${post.Itemtitle}</h5>
   <p class="cart-price">$${post.Itemprice}</p>
   <button class="delete-btn" onclick="deleteData('${doc.id}')">Delete</button>
   </div>
    `;
  });
});
window.deleteData = async function (id) {
  try {
    await deleteDoc(doc(db, "Cart", id));
    console.log("Delete Success");
  } catch (error) {
    console.error(error);
  }
};

document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  let valueSearch = document.getElementById("search-input").value;
  let cards = document.querySelectorAll(".card");
  let names = document.querySelectorAll(".name");

  for (let i = 0; i < cards.length; i++) {
    let aProductName = names[i].innerHTML;

    if (aProductName.includes(valueSearch)) {
      cards[i].classList.remove("hide");
      console.log(cards[i]);
    } else {
      cards[i].classList.add("hide");
    }
  }
});
