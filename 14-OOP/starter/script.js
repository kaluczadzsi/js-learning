'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const gabor = new Person('Gabor', 1994);
console.log(gabor);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(gabor instanceof Person);
// console.log(jay instanceof Person);

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

gabor.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(gabor.__proto__);
console.log(gabor.__proto__ == Person.prototype);

console.log(Person.prototype.isPrototypeOf(gabor));

Person.prototype.species = 'Homo Sapiens';

console.log(gabor.species);
console.log(gabor.hasOwnProperty('firstName'));
console.log(gabor.hasOwnProperty('species'));

// Object.prototype (top of prototype chain)
console.log(gabor.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const array = [3, 5, 66, 65, 66]; // new Array === []
console.log(array.__proto__);
console.log(array.__proto__ === Array.prototype);

console.log(array.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(array.unique());

const h1 = document.querySelector('h1');

// Coding challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going with ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going with ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
