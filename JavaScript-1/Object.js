// Object in javaScript

var A = {
  name1: "Raushan",
  email1: "mdraushan@gmail.com",
  roll1: "123",
  //123: "roll",
  1233: "roll",
};
// Combine Object A and B using assign Object
var B = {
  name: "Raushan",
  email: "mdraushan@gmail.com",
  roll: "123",
  //123: "roll",
  123: "roll",
};
//Using Assign in Js

// const C = Object.assign({}, A, B);
// console.log(C);

//Using Spread Operator

const D = { ...A, ...B };
console.log(D);

//Using freeze Object

// Object.freeze(A);
// A["name"] = "Jilani";
// console.log(A["name"]);

// console.log(A.name);
// console.log(A[123]);
// console.log(A["email"]);
