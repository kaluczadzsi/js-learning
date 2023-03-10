'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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
/* 
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

*/

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
