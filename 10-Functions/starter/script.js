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
*/
