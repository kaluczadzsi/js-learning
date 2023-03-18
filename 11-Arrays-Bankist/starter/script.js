'use strict';
/* 
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: 200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};


// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SIMPLE ARRAY METHODS
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE (NO MUTATE ORIGINAL ARRAY)
console.log('-SLICE-');
console.log(arr);
console.log(arr.slice(2)); // returns a new array (copy) // c, d, e
console.log(arr.slice(2, 4)); // c, d   (4) is not included
console.log(arr.slice(-2)); // from the end of the array // d, e
console.log(arr.slice(-1)); // from the end of the array // last item e
console.log(arr.slice(1, -2)); // b, c
console.log(arr.slice()); // same array, SHALLOW COPY
console.log([...arr]); // same array, SHALLOW COPY

// SPLICE (MUTATE ORIGINAL ARRAYS !)
console.log('-SPLICE-');
console.log(arr);
console.log(arr.splice(2)); // c, d, e
console.log(arr); // Original array mutated to: ['a','b']
console.log(arr.splice(-1)); // b 
console.log(arr.splice(1, 2)); // b, c


// REVERSE (MUTATE ORIGINAL ARRAY!)
console.log('-REVERSE-');
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2); //j, g, h, i, j

// CONCAT
const letters = arr.concat(arr2); // SAME
const letters2 = [...arr, ...arr2]; // SAME

// JOIN (CREATE STRING WITH SEPARATOR)
console.log(letters.join('-')); // a-b-c-e-j-g-h-i-j

// at method
// u can use method chaining with at method


const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

console.log(arr[arr.length - 1]); // 64 (LAST ELEMENT)
console.log(arr.slice(-1)[0]); // 64 (LAST ELEMENT)
console.log(arr.at(-1)); // 64 (LAST ELEMENT)

console.log('Gabor'.at(0)); // G
console.log('Gabor'.at(-1)); // r

// for (const movement of movements) {
for (const [i, value] of movements.entries()) {
  if (value > 0) {
    console.log(`Movement ${i + 1}: You deposited ${value}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(value)}`);
  }
}
console.log('---- FOREACH ----');
// forEach is HIGHER ORDER FUNCTION! requires callback function!
// PARAMETER LIST: ELEMENT, INDEX, ARRAY
// YOU CANT USE BREAK IN FOREACH!!!!

movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// FOREACH on maps, element,index,map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'GBP', 'EUR', 'EUR', 'USD']);
// value, key, set
// key no makes sense ( there is no indexes in sets)
currenciesUnique.forEach(function (value, key, set) {
  console.log(`${value}: ${key}`);
});

const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movementsUSD);

------------------------------------------------------------------

CODING CHALLANGE #2

Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);
  const average = adults.reduce((acc, age) => (acc + age) / adults.length);
  console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

------------------------------------------------------

CODING CHALLANGE #3

Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK

const calcAverageHumanAge = ages => {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => (acc + age) / arr.length, 0);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

-----------------------------------------------

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));


*/

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// // removing nesting ONLY ONE LEVEL DEEP
// console.log(arr.flat()); // [1,2,3,4,5,6,7,8]

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2)); // we can add depth argument

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance2);

// console.log(movements);

// return < 0, A, B
// return > 0, B, A

// movements.sort((a, b) => {
//   // return a - b;
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });

// movements.sort((a, b) => a - b);

// console.log(movements);
// Empty arrays + fill method
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// console.log(x); // empty x 7
// console.log(x.map(x => 5)); // empty x 7
// // x.fill(1);
// // console.log(x); // [1, 1, 1, 1, 1, 1, 1]

// x.fill(1, 3);
// console.log(x); // [empty × 3, 1, 1, 1, 1]

// arr.fill(23, 4, 6);
// console.log(arr); // [1, 2, 3, 4, 23, 23, 7]

// Array.from

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z); // [1, 2, 3, 4, 5, 6, 7]

// const randomArray = Array.from(
//   { length: 100 },
//   (_, i) => i + Math.tru(Math.random() * 100)
// );

// console.log(randomArray);

// Coding Challange #4

// 1.
/* 

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(deposit => deposit > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000);

let a = 10;
console.log(a++);
console.log(a);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// 4.

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return titleCase;
};

console.log(convertTitleCase('and here is another title with an example'));

---------------------------------------------------------

CODING CHALLANGE #4

Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects)

 Use many different tools to solve these challenges, you can use the summary
lecture to choose between them
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// recommended = weight ** 0.75 * 28;
// 1.
dogs.forEach(dog => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

// 2.
// current > (recommended * 0.90) && current < (recommended *
// 1.10)
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    dogs.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];

// dogs.forEach(dog => {
//   dog.curFood > dog.recFood
//     ? ownersEatTooMuch.push(dog)
//     : ownersEatTooLittle.push(dog);
// });
// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .map(dog => dog.owners)
  .flat();

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .map(dog => dog.owners)
  .flat();

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// 6.
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);

*/

// 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// const firstNElements = function (arr, n) {
//   return arr.slice(0, n);
// };

// const randomArray = [];

// for (let i = 0; i < 100; i++) {
//   randomArray.push(Math.floor(Math.random() * 100 + 1));
// }

// console.log(firstNElements(randomArray, 4));

// 2. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// const randomArray = [];

// for (let i = 0; i < 100; i++) {
//   randomArray.push(Math.floor(Math.random() * 100 + 1));
// }

// const lastNElements = function (arr, n) {
//   return arr.slice(-n);
// };

// console.log(randomArray);
// console.log(lastNElements(randomArray, 4));

// Write a simple JavaScript program to join all elements of the following array into a string.
// const myColor = ['Red', 'Green', 'White', 'Black'];

// const colorString = myColor.join(', ');
// console.log(colorString);

// console.log(23 == 23.0);

// // BASE 10 - 0 to 9
// // Binary base 2 - 0 1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // Conversion
// console.log(Number('23'));
// console.log(+'23');

// // Parsing
// console.log(Number.parseInt('38px', 10));
// console.log(Number.parseInt('px28', 10)); // NaN

// console.log(Number.parseFloat('2.5rem'));

// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(20));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));
// console.log(Number.isFinite(20));
// console.log(Number.isFinite(10 / 0));
// console.log(Number.isFinite('20'));
// console.log(Math.sqrt(25)); // 5
// console.log(25 ** (1 / 2)); // 5

// console.log(Math.max(10, 20, 100, 3)); // 100
// console.log(Math.min(10, 20, 100, 3)); // 3

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6 + 1));

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(20, 30));

// // Rounding integers
// console.log(Math.trunc(29.33333));
// console.log(Math.round(22.9)); // 23
// console.log(Math.round(22.1)); // 22
// // CEIL ROUNDING UP
// console.log(Math.ceil(22.9)); // 23
// console.log(Math.ceil(22.1)); // 23
// // FLOOR ROUNDING DOWN
// console.log(Math.floor(22.9)); // 22
// console.log(Math.floor(22.1)); // 22
// console.log(Math.trunc(-23.3)); // 23
// console.log(Math.floor(-23.3)); // 24

// // Rounding decimals
// console.log((2.7).toFixed(0)); // 3, toFixed return string
// console.log((2.7).toFixed(3)); // 2.700
// console.log(+(2.345).toFixed(2)); // 2.35

// REMAINDER
// console.log(5 % 2); // 1
// console.log(5 / 2); // 2.5
// console.log(6 % 3); // 0

// const isEven = n => n % 2 === 0;

// console.log(isEven(1)); // false
// console.log(isEven(2)); // true

// Numeric separators
// const diameter = 287_4685_441;
// console.log(diameter);

// const price = 345_19;
// console.log(price);

// console.log(Number('230_000')); // NaN

// BigInt
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 - 1);

// console.log(48484845484881848484848498489892488294n); // n transforms regular to bigint
// console.log(BigInt(99995958451111111111325989));

// // operators
// console.log(10000n + 10000n); // 20000
// // console.log(980000000000004444 - 3n); // cannot mix bigint with other numbers

// console.log(20n > 15); // true
// console.log(20n === 20); // false
// console.log(20n == '20'); // true

// const huge = 52292999466666478484484848n;
// console.log(huge + ' is REALLY big!'); // string

// console.log(Math.sqrt(25n)); // ERROR! bigint cannot convert to a number

const movementsDates = [
  '2019-11-18T21:31:17.178Z',
  '2019-12-23T07:42:02.383Z',
  '2020-01-28T09:15:04.904Z',
  '2020-04-01T10:17:24.185Z',
  '2020-05-08T14:11:59.604Z',
  '2020-05-27T17:01:17.194Z',
  '2020-07-11T23:36:17.929Z',
  '2020-07-12T10:51:36.790Z',
];

// Create a date
// MONTH is zero based in JS!
// const now = new Date();
// console.log(now);

// console.log(new Date('Aug 02 2020 18:05:41'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));

// console.log(new Date(0)); // UNIX: 1970 jan 01
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // UNIX: 1970 jan 04
// const timestamp = 3 * 24 * 60 * 60 * 1000;
// console.log(timestamp); // 25920000

// Working with dates
// const future = new Date(2037, 10, 19); // 2037 Nov 19. (Month zero based)
// console.log(future);
// console.log(future.getFullYear()); // 2037
// console.log(future.getMonth()); // 10
// console.log(future.getDate()); // 19
// console.log(future.getDay()); // 4 -> 0 is sunday
// console.log(future.toISOString()); // 2037-11-18T23:00:00.000Z
// console.log(future.getTime()); // 2142198000000
// console.log(new Date(2142198000000));

// console.log(Date.now()); // 1678990578026
// future.setFullYear(2040);
// console.log(future);

// console.log(new Date().getTime() - new Date('1994 05 20').getTime() / 24);

// const future = new Date(2037, 10, 19); // 2037 Nov 19. (Month zero based)
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calcDaysPassed(new Date(2037, 3, 3, 8), new Date(2037, 3, 2));

// console.log(days1);

// const num = 3884764.23;

// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'HUF',
//   // useGrouping: false,
// };

// console.log('Hungary:', new Intl.NumberFormat('hu-HU').format(num));
// console.log(
//   'Browser:',
//   new Intl.NumberFormat(navigator.language).format(999455.4894)
// );

// console.log(new Intl.NumberFormat(navigator.language, options).format(num));

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  1000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
console.log(pizzaTimer);
