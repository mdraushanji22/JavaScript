//Using Promise

const myPromise = fetch("https://fakestoreapi.com/products");
console.log(myPromise);

myPromise
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
