function add(a, b) {
  // Named function

  return a + b;
}
// const C = add(34, 6);
// console.log(C);

const add1 = function (c, d) {
  //Anonymous function
  return c + d;
};

const add2 = (e, f) => {
  //Arrow Function

  return e + f;
};
console.log(add(46, 4));
console.log(add1(6, 4));
console.log(add2(16, 4));

// const function A(...num1){  //Rest Operator
//     console.log(num1)
// }
