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
// Sarah Williams booked a seat on Eurowings flight EW23
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

// BIND METHOD

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// Return a new function, where
//THIS keyword will be set to eurowings
bookEW(449, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Peter Parker');
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(5000));

----------------------------------------

CODING CHALLANGE #1

Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 
GOOD LUCK 

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
/* 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number) 

poll.registerNewAnswer();

/* 1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button. 

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

/* 3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".

poll.displayResults.call({ answers: [1, 2, 3] }, 'string');

----------------------------------------

IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function () {
  console.log(`This will never run again`);
  const isPrivate = 23; // Encapsulated inside of this function scope
})();

(() => console.log(`This will ALSO run again`))();

{
  const isPrivate = true;
  var notPrivate = true;
}

console.log(notPrivate); // Accessible

----------------------------------------

CLOSURES

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();


// EXAMPLE 1
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46

// Re-assigning f function
h();
f(); //1554
console.dir(f);

// EXAMPLE 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n}`);
  }, wait * 1000);
  console.log(`There are 3 groups, each with ${perGroup} passengers`);
  console.log(`Will start boarding ${wait}
  seconds`);
};

boardPassengers(180, 3);

*/

/* This is more of a thinking challenge than a coding challenge 
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.

GOOD LUCK  

let changeColor = (function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  return function test() {
    header.style.color = 'blue';
  };
})();s

document.body.addEventListener('click', changeColor);


*/
