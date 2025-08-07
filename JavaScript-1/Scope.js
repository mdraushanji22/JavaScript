console.log(this); // this keyword Directly point Object
console.log("Raushan");

var a = 123;
var b = 345;

// let c = 456;
const d = 789;

console.log(a, b);
console.log(c, d);

//Scope

var a = 34;
{
  var b = 46;
  console.log(a, b, c);
  //Var blocked scope globally accesible
}

function add() {
  //   //var functional scoped
  //   var c = 456;
  console.log(a, b, c); //var functional scope globally not accesible
}
add();
console.log(a, b, c);

// let a = 34;
{
  let b = 46;
  //console.log(a, b, c);
  //Let keyword is blocked scope
  //let blocked scope globally not accesible
}

function add() {
  let c = 456;
  // console.log(a, b);
}
add();
console.log(a, b, c);
// let and const same behaviour:This is both blocked scope

//Hoisting
console.log(a);
var a = 456; // var supported Hoisting

console.log(b);
let b = 789; // let not supported Hoisting

console.log(c); // const not supported Hoisting
const c = 890;
