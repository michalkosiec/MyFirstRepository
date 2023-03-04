'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // The old way
  // openingHours: openingHours,
  // ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', adress }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },
  // Easier way of writing methods
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// You cannot use entries() method on an given object because it doesn't have that method built in. In order to loop over the object using the for of loop you must use the Object.entries() method (it doesn't return an iterable object, but it's still great for looping over and in case you need that you can always use the entries method on the array returned by Object.entries()). If you are to loop over arrays and you would like to display the order of the elements it is recommended to use the entries() method directly on the array (the function returns a separate object called iterable object). At this point we don't know yet the full potential of iterable objects!!! It is supposed to be somewhere later in the course.

// // Property NAMES
// const properties = Object.keys(openingHours);
// // console.log(properties);

// let openStr = `We are opened on: `;

// for (const day of properties) {
//   // console.log(day);
//   openStr += `${day}, `;
// }
// // console.log(openStr);
// // console.log();

// // Property VALUES
// const values = Object.values(openingHours);
// // console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// // console.log(restaurant.openingHours.mon?.open);
// // console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // IMPORTANT NOTE!!! We must use ?. every time we are not sure whether a certain property exists (optional chaining works only for the previous property)!!!

// for (const day of days) {
//   const open = restaurant?.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) || 'Method does not exist');

// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
// // Arrays
// // const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];
// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(...menu.entries());

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// Or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // Nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // And assignment operator
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// restaurant.orderPizza && restaurant.orderPizza('pizza', 'tomato');

// // When using || operator in short circuiting if the first expression gets coerced to false, the second expression will be evaluated.
// rest2.numGuests = rest2.numGuests || -1000;
// console.log(rest2.numGuests);

// console.log(rest2.numGuests);

// // restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// // Use ANY data type, return ANY data type, short-circuiting
// console.log('---- OR ----');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 0; // It doesn't work for 0, because it's a falsy value
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // 1) Destructuring

// // Spread, because on the RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // Rest, because on the LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// // 2) Functions
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// // Real world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurant.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/*
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(newArray);
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// Iterables: arrays, strings, maps, sets. NOT objects
// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   adress: 'Via del Sole, 21',
//   starterIndex: 3,
// });

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(restaurantName, hours, tags);
// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// // console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
*/

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// // Switching variables
// /*
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// */
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
// // The rest parameter
// const [t, c, n, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(t, c, n, rest);

// const obj = {
//   myProperty: 0,
//   randomMethod: function () {
//     console.log(this.myProperty);
//   },
// };

// obj.randomMethod && obj.randomMethod();
// const randomValue = obj.myProperty || 23;
// console.log(randomValue);

// let x = -5;
// let y = 10;

// let result = 0 && ''; // evaluates to 2, because y / x is truthy
// console.log(result); // prints 2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(...players);
    console.log(`Number of goals: ${players.length}`);
  },
};

console.log(typeof game.players[Symbol.iterator]);
console.log(typeof game.odds);
console.log(typeof game.odds[Symbol.iterator]);
const obj = game.scored.entries();
for (const [score, player] of obj) {
  console.log(`Goal ${score + 1}: ${player}`);
}

let average = 0;
const oddsFirst = Object.values(game.odds);
const odds = oddsFirst.entries();
for (const [index, odd] of odds) {
  average += odd;
}
console.log((average /= oddsFirst.length));

const oddsSecond = Object.entries(game.odds);
for (let [team, value] of oddsSecond) {
  if (team === 'x') team = 'draw';
  console.log(`Odd of ${game[team] ?? 'draw'}: ${value}`);
}

const scorers = {};
for (const [index, scorer] of game.scored.entries()) {
}

// // 1)
// // const players1 = [...game.players[0]];
// // const players2 = [...game.players[1]];
// // const [...players1] = game.players[0];
// // const [...players2] = game.players[1];
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2)
// const [goalKeeper1, ...fieldPlayers1] = players1;
// console.log(goalKeeper1, fieldPlayers1);

// // 3)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4)
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // 5)
// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6)
// const printGoals = function (...players) {
//   console.log(...players);
//   console.log(`Number of goals: ${players.length}`);
// };

// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');
// team1 === team2 && console.log('None of the teams is more likely to win');

// // 8)
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// const xyz = { x: 1, y: 2, z: 3 };
// const values1 = Object.values(xyz);
// console.log(values1);
// for (let [i, el] of values1.entries) {
//   values[i] =
// }
// console.log(values1);
// const arr = ['a', 'b', 'c'];
// console.log(...arr.entries());
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(Object.entries(obj));
