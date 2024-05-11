class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log(`${this.name} say hello`);
  }
  add(a, b) {
    console.log(`${this.name} say`, a + b);
  }
}

// let Thien = new Human("Thien", 15);
// let Long = new Human("Long", 15);
// let Khoi = new Human("Khoi", 15);
// console.log(Thien);
// Long.hello();
// Khoi.add(1, 2);

class Student extends Human {
  constructor(name, age, classRoom) {
    super(name, age);
    this.classRoom = classRoom;
  }
}

let Thien = new Student("Thien", 15, 4);
Thien.hello();

class button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  render() {
    return `<button style="background-color:${this.color}">${this.text}</button>`;
  }
}
let btn = new button("CLICK", "red");
// document.body.innerHTML += btn.render();

// class from {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   render() {
//     return `<form action="">
//     <h4>${this.name}</h4>
//   <div class="mb-3">
//     <label class="form-label"
//       >Email address</label
//     >
//     <input
//       type="${this.type}"
//       class="form-control"
//       id="exampleFormControlInput1"
//       placeholder="name@example.com"
//     />
//   </div>
//   <div class="mb-3">
//     <labelclass="form-label"
//       >password</label
//     >
//     <input
//       class="form-control"
//       id="exampleFormControlTextarea1"
//       rows="3"
//       type="${this.type}"
//     ></input>
//   </div>
// </form>`;
//   }
// }

// let login = new from("register", "text");
// document.body.innerHTML += login.render();
// let signup = new from("sign up", "password");
// document.body.innerHTML += signup.render();
