'use strict';

/*
Data needed for a later exercise
 const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'; 

// Data needed for first part of the section
*/

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  // [`day + ${2 + 2}`]:
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // OLD WAY
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // NEW WAY OF WRITING METHODS
  order(starterIndex, mainIndex) {
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
};

/*
DESTRUCTURING ARRAYS
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
const letters = [...str, ' ', 'S']; // ['J', 'o', 'n', 'a', 'S']
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

// Use ANY data type, return ANY data type, short-circuiting
// || if the first operand is truthy, other operand will not evaluated!

// Guess the results!
console.log('---- OR ----');
console.log(3 || 'gabor'); // 3
console.log('' || 'gabor'); // gabor
console.log(true || 0); // True
console.log(undefined || null); // null

// first truthy value is 'Hello'
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests || 10; // 10
console.log(guests1);

console.log('---- AND ----');
// && AND operator short circuits when the first value is falsy
console.log(0 && 'gabor'); // 0
console.log('' && true); // ''
console.log(7 && 'gabor'); // Gabor (last value is returned)

console.log('Hello' && 23 && null && 'gabor'); // null

// Checking if this method exists
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

-----------------------------------------------------------------------------

NULLISH COALESCING OPERATOR (??)

// 0 is falsy value
// restaurant.numGuests = 0;
const numGuests = restaurant.numGuests || 10;
console.log(numGuests); // 10

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0

-----------------------------------------------------------------------------

LOGICAL ASSIGMENT OPERATORS

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// || OR assigment
// Adding numGuests property to the objects
// that do not have them.
rest2.numGuests = rest1.numGuests || 10; // 20 - first value truthy
rest2.numGuests = rest2.numGuests || 10; // 10 - second value truthy

// SAME AS rest1.numGuests = rest1.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assigment operator (null or undefined)
// rest1.numGuests ??= 10; // 0
// rest2.numGuests ??= 10; // 10

rest1.owner &&= '<ANONYMOUS>';
// SAME AS rest2.owner = rest2.owner && '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

-----------------------------------------------------------------------------

// CODING CHALLANGE #1

We're building a football betting app (soccer for my American friends)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK

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
};

// 1.
const [players1, players2] = game.players;
// 2.
const [goalkeeper1, ...fieldPlayers1] = players1;
const [goalkeeper2, ...fieldPlayers2] = players2;
// 3.
const allPlayers = [...players1, ...players2];
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// 5.
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6.
const printGoals = function (...player) {
  for (let i = 0; i < player.length; i++) {
    console.log(`${player[i]} scored`);
  }

  console.log(`Number of goals: ${player.length}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// 7.
const a = team1 < team2 && console.log('Team 1 is more likely to win'); // first value is true, then continues operation

-----------------------------------------------------------------------------

FOR OF LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// we can still use continue, break
for (const item of menu) {
  console.log(item);
}

for (const [key, value] of menu.entries()) {
  console.log(`${key + 1}: ${value}`);
}

-----------------------------------------------------------------------------

ENHANCED OBJECT LITERALS

-----------------------------------------------------------------------------

OPTIONAL CHAINING (?.)

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// console.log(restaurant.openingHours.mon.open); // undefined.open

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exitst');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }, {}];

console.log(users[1]?.name ?? 'empty');

-----------------------------------------------------------------------------

LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); // Returns an array: ['thu', 'fri', 'sat']
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES

const values = Object.values(openingHours);
console.log(values); //returns an  array: [{open:12, close: 10}, {etc}, {etc}];

for (const value of values) {
  console.log(value);
}

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries); // [Array(2), Array(2), Array(2)]

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and ${close} at  ${close}}`);
}

-----------------------------------------------------------------------------

CODING CHALLANGE #2

Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK

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
};

// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
console.log('Task 1:');
for (let [goal, player] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(goal) + 1}: ${player}`);
}
console.log('---------------------');

//2. Use a loop to calculate the average odd and log it to the console (We already
//studied how to calculate averages, you can go check if you don't remember)
console.log('Task 2:');
let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
console.log(`Average odd: ${sum / Object.keys(game.odds).length}`);
console.log('---------------------');

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names
console.log('Task 3:');
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamString} ${odd}`);
}
console.log('---------------------');
console.log('Task 4:');
const scorers = {
  [game.scored[0]]: 2,
  [game.scored[1]]: 1,
  [game.scored[2]]: 1,
};
console.log(scorers);
console.log('---------------------');

-----------------------------------------------------------------------------

SETS

There is no indexes!

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Risotto']);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // True
console.log(ordersSet.has('Bread')); // False
ordersSet.add('Garlick Bread');
ordersSet.add('Garlick Bread');
ordersSet.delete('Garlick Bread');
// ordersSet.clear(); // Delete all element
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('ababab')); // a, b

-----------------------------------------------------------------------------

MAPS (KEY, VALUE) PAIRS
keys can be any type!

map.set => returnes updated map, so we can call set again that map

const rest = new Map();
rest.set('name', 'Classico Italiano'); // Like add in sets
rest.set(1, 'Firenze, Italy');

console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// Read data .get

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // 'We are open :D'
console.log(rest.get(1));

// Boolean as a map key
const time = 10; // 9 PM
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// check certain key
console.log(rest.has('categories')); // true

rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

const arr = [1, 2];
rest.set([1, 2], 'Test');
rest.set(arr, 'Test 2');
console.log(rest);
console.log(rest.get([1, 2])); // NOT THE SAME AS -> rest.set([1, 2], 'Test');
console.log(rest.get(arr)); // Test 2
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

const question = new Map([
  ['question', 'What is the best programing language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// MAPS also iterables!

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
0;
const answer = Number(prompt('Your answer?'));

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);

-----------------------------------------------------------------------------

CODING CHALLANGE #3

Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//1. Create an array 'events' of the different game events that happened (no
//duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
for (const [key, value] of gameEvents) {
  const str =
    key <= 45
      ? `[FIRST HALF] ${key}: ${value}`
      : `[SECOND HALF] ${key}: ${value}`;

  console.log(str);
}

-----------------------------------------------------------------------------

WORKING WITH STRINGS

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane.length); // 4
console.log(plane[0]); // A

// Methods
console.log(plane.indexOf('3')); // 1
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Air')); // 4

console.log(airline.slice(4)); // Air Portugal (4 is begin parameter)
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al (last two letters)
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s == 'B' || s == 'E') {
    console.log('You got the middle seat 😭');
  } else {
    console.log('You got lucky 😊');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas')); // Object

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'doNalD';
const correct =
  passenger.toUpperCase()[0] + passenger.slice(1).toLocaleLowerCase();
console.log(correct);

const email = '     gabOr@io.com   \n';
const correctEmail = email.toLowerCase().trim();
console.log(correctEmail);

// replacing
const price = '288,97€';
const priceUS = price.replace(',', '.').replace('€', '$');
console.log(priceUS);

const plane = 'A320neo';
console.log(plane.includes('neo')); // true
console.log(plane.startsWith('A32')); // true

console.log('a+very+nice+string'.split('+')); // return array ['a','very','nice','string']
console.log('Kalucza Gabor'.split(' ')); // ['Kalucza', 'Gabor']

const [firstName, lastName] = 'Kalucza Gabor'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

*/
const passenger = 'jessica ann smith davis';

const capitalizeName = function (name) {
  const capitalized = name.split(' ');
  const namesUpper = [];

  for (const word of capitalized) {
    namesUpper.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  return namesUpper.join(' ');
};

console.log(capitalizeName('John doe'));
console.log(capitalizeName('sAMuEl Jackson'));
