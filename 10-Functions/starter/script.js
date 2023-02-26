'use strict';
// DEFAULT PARAMETERS
/* const bookings = [];
const createBooking = function (
  // ES6
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
// Skipping parameter, leave at default
createBooking('LH123', undefined, 5); 

----------------------------------------

HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE

const flight = 'LH234';
const passenger = {
  name: 'Uchiha Sasuke',
  passport: 2473497758,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2473497758) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);

// Two function (newPassport, checkIn) modifing the same object (passenger)
const newPassport = person => {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(passenger);
checkIn(flight, passenger);
console.log(passenger);

----------------------------------------

FIRST CLASS AND HIGHER ORDER FUNCTIONS

addEventListener is a higher order function (Bcs it recieves a function as input)
callback function is a function that is passed as an argument

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Transformed by: ${fn.name}`);
  return fn(str);
};

console.log(transformer('JavaScript is the best!', upperFirstWord));
console.log(transformer('JavaScript is the best!', oneWord));

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

// addEventListener -> higher-order function
// hight5 -> callback function
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

----------------------------------------

FUNCTIONS RETURNING FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); // result is the inner function

greeterHey('Tom'); // Hey Tom
greeterHey('Steven'); // Hey Steven

greet('Hello')('Jonas'); // Hello Jonas

// With arrow function
const greet2 = greet => name => console.log(`${greet} ${name}`);

----------------------------------------

THE CALL AND APPLY AND BIND METHOD
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Kalucza Gabor');
lufthansa.book(239, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// CALL METHOD
const book = lufthansa.book;

// regular function call THIS -> undefined
// book(23, 'Sarah Williams'); // error
book.call(eurowings, 23, 'Sarah Williams');
/* Sarah Williams booked a seat on Eurowings flight EW23 */
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 115, 'Aizen Sousuke');
console.log(swiss);

// APPLY METHOD
const flightData = [537, 'George Cooper']; // NOT USED OFTEN
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // SAME AS THIS
