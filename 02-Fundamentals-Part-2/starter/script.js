'use strict';
/* 
FUNCTIONS

function fruitProcessor(apples, oranges) {
  // parameters
  const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(4, 7)); // arguments

------------------------------------------------------------------------

*/

// Function declaration
function calcAge1(brithYear) {
  return 2023 - brithYear;
}

// Function expression
const calcAge2 = function (brithYear) {
  return 2023 - brithYear;
};

// Arrow functions
const calcAge3 = (brithYear) => 2023 - brithYear;

const yearsUntilRetirement = (brithYear) => {
  const age = 2023 - brithYear;
  const retirement = 65 - age;
  return retirement;
};
