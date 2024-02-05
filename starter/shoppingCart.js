// Exporting module
// console.log('Exporting module');

// Blocking code
// await new Promise(res => {
//   setTimeout(() => res(), 3000);
// });

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default addToCart;
