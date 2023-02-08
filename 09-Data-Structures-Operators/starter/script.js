'use strict';

/*
Data needed for a later exercise
 const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'; */

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    adress,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${adress} at ${time}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* DESTRUCTURING ARRAYS
// Without destructuring
 const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // 2, 3, 4

// With destructuring
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4

let [main, , secondary] = restaurant.categories; // Skipping second element
console.log(main, secondary);

// Change variables without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Change variables with destructuring
[main, secondary] = [secondary, main];
console.log(main);
console.log(secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested; // 2, 5, 6

console.log(i, j, k);

// Default values
const [p = -1, q = -1, r = -1] = [8, 9];
console.log(p, q, r); 

-----------------------------------------------------------------------------

DESTRUCTURING OBJECTS
variable names must match with property names!



// SAME PROPERTY NAMES
const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

// Adding custom variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// Adding default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b); //23, 7

// Nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  adress: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  adress: 'Via del Sole, 21',
  mainIndex: 2,
});

-----------------------------------------------------------------------------

SPREAD OPERATOR

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const goodNewArray = [1, 2, ...arr]; // [1, 2, 7, 8, 9]
console.log(...goodNewArray); // SAME
console.log(1, 2, 7, 8, 9); // SAME

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(...newMenu);

// Copy array (shallow)
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S']; // ['J', 'o', 'n', 'a', 's']
console.log(letters);
console.log(...str); // SAME
console.log('J', 'o', 'n', 'a', 's'); // SAME
/* 
const ingredients = [
  prompt("Let's make a pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients); // SAME
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // SAME 

// Objects
const newRestaurant = { foundedIn: 1997, ...restaurant, founder: 'Guiseppe' };

// Shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);
console.log(restaurant);

-----------------------------------------------------------------------------

REST OPERATOR

spread operator -> unpack an array 
rest operator -> pack into an array 


// 1) DESTRUCTURING PART

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);

// REST element always must be the last
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);

// 2) FUNCTIONS

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3); // [2, 3]
add(4, 5, 9, 12); // [4, 5, 9, 12]
add(7, 8);

const x = [23, 5, 7]; // 23, 5, 7

add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives');
restaurant.orderPizza('Spinach');

-----------------------------------------------------------------------------

SHORT CIRCUITING (&& and ||)

*/
// Use ANY data type, return ANY data type, short-circuiting
// if the first operand is truthy, other operand will not evaluated!

// Guess the results!
console.log(3 || 'Gabor'); // 3
console.log('' || 'Gabor'); // Gabor
console.log(true || 0); // True
console.log(undefined || null); // null
