// const hello = (a, b) => {
//   return a * b;
// };
// console.log(hello(2, 3));

// let arr = [1, 2, 3, 4];
// let arr2 = [...arr];
// arr2.push(5);
// console.log(arr);
// console.log(arr2);

// let arr = [1, 2, 3, 4];
// let arr2 = arr.map((item) => {
//   return item ** 2;
// });
// console.log(arr2);

// let arr = [1, "2", 3, "4"];
// let arr2 = arr.filter((item) => {
//   return typeof item == "number";
// });
// console.log(arr2);

// let student = [
//   {
//     name: "Thien",
//     age: "15",
//   },
//   {
//     name: "Khoi",
//     age: "15",
//   },
//   {
//     name: "Long",
//     age: "15",
//   },
// ];
// let number = Number(prompt("Nhap tuoi hs:"));

// let a = student.filter((item) => {
//   return item.age == number;
// });

// a.forEach((item) => {
//   console.log(item.name);
// });
let content = document.querySelector(".content");
console.log(content);

const url = "https://66363763415f4e1a5e26a7e1.mockapi.io/Student";
getData();
async function getData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    renderData(data);
  }
}
function renderData(data) {
  data.forEach((element) => {
    content.innerHTML += `
    <h1>${element.Name}</h1>
    <h2>${element.Age}</h2>
    <h3>${element.Id}</h3>
    <h4>${element.Image}</h4>
    `;
  });
}
