//Higher Order: forEach,map,filter and reduce

const dummyMovies = [
  "The Last Galaxy",
  "Midnight Heist",
  "Shadow of the Titan",
  "Neon Dreams",
  "The Forgotten Kingdom",
  "Echoes in the Dark",
  "Rogue Agent",
  "Silent Storm",
];

// function printMovies(movie) {
//   console.log(movie);
// }
// printMovies(dummyMovies);

//Higher order function using forEach methods

// dummyMovies.forEach(function (movie) {  //forEach method return undefined
//   console.log(movie);
// });

// Using map() Methods

const index = dummyMovies.map((index) => {
  // map() method return New array
  //map methods return New
  return index.toUpperCase();
});
console.log(index);
