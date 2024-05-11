const animals = [
  {
    name: "cat",
    size: "small",
    weight: "5",
  },
  {
    name: "dog",
    size: "small",
    weight: "10",
  },
  {
    name: "lion",
    size: "medium",
    weight: "150",
  },
];
let name = animals.map((item) => {
  return item.name;
});
console.log(name);
