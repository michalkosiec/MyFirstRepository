// Importing module
// console.log('Importing module');
// import {addToCart, totalPrice as price, tq} from './shoppingCart.js'
// addToCart('bread', 5);
// console.log(price, tq)
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 2);
add('apples', 4);
console.log(cart);
// console.log('sth');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(res)
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   return {
//     title: data.at(-1).title,
//     text: data.at(-1).body,
//   };
// };

// Not clean
// const lastPost = getLastPost();
// lastPost.then(last => console.log(last));
// const lastPost = await getLastPost();
// console.log(lastPost);

// The module pattern
// const ShoppingCart = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart.addToCart('apple', 4);
// ShoppingCart.addToCart('pizza', 2);
// console.log(ShoppingCart);
// console.log(ShoppingCart.shippingCost);

// Export
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//   );
// };

// Import
// const { addToCart} = require('./shoppingCart.js');

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// const state = {
//   cart: [
//     { product: 'bread', quantity: 5 },
//     { product: 'pizza', quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };

// const stateDeepClone = cloneDeep(state);
// const stateClone = Object.assign({}, state);
// state.user.loggedIn = false;
// console.log(stateClone);
// console.log(stateDeepClone);
