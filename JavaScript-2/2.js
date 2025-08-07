const A = [1, 2, 3, 4, 5];
const moviesName = [
  "The Last Galaxy",
  "Midnight Heist",
  "Shadow of the Titan",
  "Neon Dreams",
  "The Forgotten Kingdom",
  "Echoes in the Dark",
  "Rogue Agent",
  "Silent Storm",
];
const print = moviesName.forEach(function (i, index, movie) {
  console.log(`The name of this ${movie} of index:${index} and ${i}`);
});
console.log(print);
//used map() methods

// const abc = A.map((i) => {
//   return i * 3;
// });
// console.log(abc);
// console.log(A);

A.map((i, index) => {
  console.log(i, index);
});
