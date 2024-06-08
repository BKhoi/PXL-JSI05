import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQPJz9BT7vkKdsqBusApp0W4gQQDj7pMs",
  authDomain: "fir-9c77e.firebaseapp.com",
  projectId: "fir-9c77e",
  storageBucket: "fir-9c77e.appspot.com",
  messagingSenderId: "379374211188",
  appId: "1:379374211188:web:bf251e225fa38c3c9dc121",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const docRef = await addDoc(collection(db, "JSI05"), {
//   studentCount: 3,
//   course: "JavaScript intensive",
// });
// console.log("Document written with ID: ", docRef.id);

// const querySnapshot = await getDocs(collection(db, "JSI05"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.data().studentCount}`);
// });

const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  try {
    const docRef = await addDoc(collection(db, "PXL-JSI05"), {
      title: title,
      body: body,
    });
    console.log("Success");
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

const show = document.getElementById("show");

async function getData() {
  show.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "PXL-JSI05"));
  querySnapshot.forEach((doc) => {
    show.innerHTML += `
    <h2>${doc.data().title}</h2>
    <p>${doc.data().body}</p>
    <button onclick="deleteData('${doc.id}')">Delete</button>
    `;
  });
}

window.deleteData = async function (id) {
  try {
    await deleteDoc(doc(db, "PXL-JSI05", id));
    console.log("Delete Success");
    getData();
  } catch (error) {
    console.log(error);
  }
};

getData();
