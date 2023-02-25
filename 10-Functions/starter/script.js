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
*/

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
