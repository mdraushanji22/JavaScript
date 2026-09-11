// setInterval
console.log("Syncronous in nature");

setInterval(() => {
  console.log("async function callback");
}, 1000);
console.log("Last one executed by");
