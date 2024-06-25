const one = [1, 2, 3, 4, 5];

// const two = [2, 4, 6, 8, 10];
// const three = [3, 6, 9, 12, 15];
// const elements = ["<p>3</p>", "<p>6</p>", "<p>9</p>", "<p>12</p>", "<p>15</p>"];

// const two = [];
// const three = [];
// const elements = [];

// for (const element of one) {
//   two.push(element * 2);
// }

// for (const element of one) {
//   three.push(element * 3);
// }

// for (const element of one) {
//   elements.push("<p>" + element * 3 + "</p>");
// }

// console.log("two", two);
// console.log("three", three);
// console.log("elements", elements);

Array.prototype.myMap = function (fn) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const value = fn(this[i], i, this);
    newArray.push(value);
  }

  return newArray;
};

const two = one.myMap((element, index, array) => {
  return element * 2;
});

const three = one.myMap((element, index, array) => {
  return element * 3;
});

const elements = one.myMap((element, index, array) => {
  return "<p>" + element * 3 + "</p>";
});

// const two = one.map((element, index, array) => {
//   return element * 2;
// });

// const three = one.map((element, index, array) => {
//   return element * 3;
// });

// const elements = one.map((element, index, array) => {
//   return "<p>" + element * 3 + "</p>";
// });

console.log("two", two);
console.log("three", three);
console.log("elements", elements);
