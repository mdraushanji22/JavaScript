// Non-Referntial Memory

var a = 456;
var b = a;
console.log(a, b);

b = 90;
console.log(a, b);

//Refrential Memory

var a1 = {
  X: "123",
  y: "Raushan",
};
var b1 = a1;
console.log(a1.X, b1.y);
b1.X = 786;
console.log(b1.X, b1.y);
console.log(a1.X, a1.y);
