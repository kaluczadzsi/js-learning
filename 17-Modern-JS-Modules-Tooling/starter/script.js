// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// ('./shoppingCart.js');
// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// console.log('Importing module');

// ShoppingCart.addToCart('bread,', 5);
// console.log(ShoppingCart.tq);

// Default export
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// import add from './shoppingCart.js';
// add('pizza', 10);

// import add from './shoppingCart.js';
// import { cart } from './shoppingCart.js';
// add('pizza', 1);
// add('bread', 10);
// add('apples', 4);
// console.log(cart); [{...},{...},{...}]

// top level await ( only works in modules )
// Using await without async function

// console.log('start fetching');
// const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await resp.json();
// console.log(data);
// console.log('Something');

// import * as ShoppingCart from './shoppingCart.js';
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// Not very clean
// const lastPost = getLastPost();
// lastPost.then(last => console.log(last));

// const lastPost = await getLastPost();
// console.log(lastPost);

/* const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return { addToCart, cart, totalPrice, totalPrice };
})();

ShoppingCart.addToCart('apple', 4);
ShoppingCart.addToCart('pizza', 4);
console.log(ShoppingCart); */
// console.log(ShoppingCart.shippingCost);

// Export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

// Import
// const {addToCart} = require('./etc..');
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);
