const shoppingCart = [
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Xiomi", price: 2.99, quantity: 2 },
  { name: "Samsung", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 4.99, quantity: 4 },
  { name: "Nokia", price: 4.99, quantity: 4 },
];
// Using reduce method

const print = shoppingCart
  .map(function (cart) {
    return cart.quantity * 3;
  })
  .filter(function (cart) {
    return cart % 2;
  })
  .reduce(function (total, cart) {
    return total + cart;
  }, 0);
console.log(print);

// const print = shoppingCart.reduce(function (total, cart) {
//   return total + cart.name;
// }, 0);
// console.log(print);
