'use strict';
// DEFAULT PARAMETERS
const bookings = [];
const createBooking = function (flightNum, numPassengers, price) {
  numPassengers = numPassengers || 1;
  price = 0;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
