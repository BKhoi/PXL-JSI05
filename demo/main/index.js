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

const books = [
  {
    name: "Yumi & The Painter",
    price: 10,
    image: "../img/yumi2.jpg",
    instock: 8,
    desc: "#1 New York Times bestselling",
  },
  {
    name: "The Little Prince",
    price: 8,
    image: "../img/prince2.jpg",
    instock: 5,
    desc: "Explore The Vast Space And Time.",
  },
  {
    name: "If I Did It",
    price: 16,
    image: "../img/did.jpg",
    instock: 7,
    desc: "Confession of The Killer",
  },
];

const manga = [
  {
    name: "One Punch Man",
    price: 13,
    image: "../img/opm2.jpg",
    instock: 8,
    desc: "The Number 1 Hero.",
  },
  {
    name: "Steel Ball Run",
    price: 8,
    image: "../img/sbr.jpg",
    instock: 5,
    desc: "Horse Race Across America",
  },
  {
    name: "Dragon Ball Z  ",
    price: 14,
    image: "../img/dbz.jpg",
    instock: 7,
    desc: "Face multiversial threats",
  },
];

const scifi = [
  {
    name: "Snow Crash",
    price: 13,
    image: "../img/snow.jpg",
    instock: 8,
    desc: "A fast-paced adventure blending virtual reality, ancient Sumerian culture, and corporate espionage.",
  },
  {
    name: "Leviathan Wakes",
    price: 8,
    image: "../img/leviathan.jpg",
    instock: 5,
    desc: "A modern space opera that combines action with political intrigue and rich development.",
  },
  {
    name: "The Three-body Problem",
    price: 14,
    image: "../img/body.jpg",
    instock: 7,
    desc: " A hard science fiction series that tackles first contact with an alien civilization and its consequences.",
  },
];

const productItems = document.getElementById("books");
function getProducts() {
  for (let i = 0; i < books.length; i++) {
    productItems.innerHTML += `
      <div class="col-md-4 col-12">
      <div class="card" style="width: 18rem">
      <a href="../details/detail.html">
        <img
          src="${books[i].image}"
          class="card-img-top product-img"
          alt="..."
        />
        </a>
        <div class="card-body">
          <h4 class="card-title name">${books[i].name}</h4>
          <div class="card-text">
            <p class="desc"><i>
            ${books[i].desc}
            </i><p>
            <p id="price">Price: $${books[i].price}</p>
            <p id="instock">In Stock: ${books[i].instock}</p>
          </div>
          <a href="../details/detail.html" class="btn detail-btn"
            >See more information</a
          >
        </div>
      </div>
    </div>
      `;
  }
}
getProducts();

const productItems2 = document.getElementById("manga");
function getProducts2() {
  for (let i = 0; i < manga.length; i++) {
    productItems2.innerHTML += `
      <div class="col-md-4 col-12">
      <div class="card" style="width: 18rem">
      <a href="../details/detail.html">
        <img
          src="${manga[i].image}"
          class="card-img-top product-img"
          alt="..."
        />
        </a>
        <div class="card-body">
          <h4 class="card-title name">${manga[i].name}</h4>
          <div class="card-text">
            <p class="desc"><i>
            ${manga[i].desc}
            </i><p>
            <p id="price">Price: $${manga[i].price}</p>
            <p id="instock">In Stock: ${manga[i].instock}</p>
          </div>
          <a href="../details/detail.html" class="btn detail-btn"
            >See more information</a
          >
        </div>
      </div>
    </div>
      `;
  }
}
getProducts2();

const productItems3 = document.getElementById("scifi");
function getProducts3() {
  for (let i = 0; i < scifi.length; i++) {
    productItems3.innerHTML += `
      <div class="col-md-4 col-12">
      <div class="card" style="width: 18rem">
      <a href="../details/detail.html">
        <img
          src="${scifi[i].image}"
          class="card-img-top product-img"
          alt="..."
        />
        </a>
        <div class="card-body">
          <h4 class="card-title name">${scifi[i].name}</h4>
          <div class="card-text">
           <p class="desc"><i>
            ${scifi[i].desc}
            </i><p>
            <p id="price">Price: $${scifi[i].price}</p>
            <p id="instock">In Stock: ${scifi[i].instock}</p>
          </div>
          <a href="../details/detail.html" class="btn detail-btn"
            >See more information</a
          >
        </div>
      </div>
    </div>
      `;
  }
}
getProducts3();

document.getElementById("search").addEventListener("click", (event) => {
  event.preventDefault();
  let valueSearch = document.getElementById("search-input").value.trim();
  let cards = document.querySelectorAll(".card");
  let names = document.querySelectorAll(".name");

  for (let i = 0; i < cards.length; i++) {
    let aProductName = names[i].innerHTML;

    if (aProductName.includes(valueSearch)) {
      cards[i].classList.remove("hide");
    } else {
      cards[i].classList.add("hide");
    }
  }
});
