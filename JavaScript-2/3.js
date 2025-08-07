const Movies = [
  // Action
  {
    title: "Shadow Strike: Phantom Protocol",
    releaseYear: 2022,
    genre: "Action",
    series: "Shadow Strike",
    sequels: ["Shadow Strike 2: Midnight Run", "Shadow Strike 3: Dark Horizon"],
    spinOffs: ["Shadow Strike Origins: The First Blade"],
  },
  // Sci-Fi
  {
    title: "Quantum Echo",
    releaseYear: 2021,
    genre: "Sci-Fi",
    series: "Quantum Echo",
    sequels: ["Quantum Echo: Paradox", "Quantum Echo: Fractured Time"],
    spinOffs: ["Quantum Echo: Singularity"],
  },
  // Horror
  {
    title: "The Midnight Mannequin",
    releaseYear: 2023,
    genre: "Horror",
    series: "Midnight Mannequin",
    sequels: ["The Midnight Mannequin: Dollhouse of Fear"],
  },
  // Comedy
  {
    title: "Zombies vs. Unicorns",
    releaseYear: 2025,
    genre: "Comedy",
    series: "Zombies vs. Unicorns",
    sequels: ["Zombies vs. Unicorns: Apocalypse LOL"],
  },
  // Drama
  {
    title: "Letters to Yesterday",
    releaseYear: 2023,
    genre: "Drama",
    series: "Letters",
    related: ["Letters to Tomorrow"],
  },
];
const print = Movies.filter(function (i) {
  return i.releaseYear < 2023;
});
console.log(print);
