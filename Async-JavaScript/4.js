//Using async, await
//https://fakestoreapi.com/products
var abc = async function add() {
  try {
    var res = await fetch("https://fakestoreapi.com/products");
    var data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
abc();
