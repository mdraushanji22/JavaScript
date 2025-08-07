//scope: Lexical scope

// var a = "Jilani"; // Global scope //var execute on browser object

// const A = {
//   a: "Raushan",
//   b: 123,
//   abc: function () {
//     console.log(this.a);
//   },
// };
// A.abc();
// console.log(this.a);

// const c = "Jilani"; //Arrow function globally execute

// const B = {
//   name: "Raushan",
//   age: "23",
//   cde: () => {
//     console.log(this.B);
//   },
// };
// B.cde();
// console.log(c);

// const c = "Jilani"; //Arrow function globally execute
console.log(this);

const B = {
  name: "Raushan",
  age: "23",
  abd: function () {
    const cde = () => {
      console.log(this.B);
    };
    cde();
  },
};
B.abd();
// console.log(c);
