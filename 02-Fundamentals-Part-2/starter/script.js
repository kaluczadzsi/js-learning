'use strict';
/* 
FUNCTIONS

function fruitProcessor(apples, oranges) {
  // parameters
  const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
  return juice;
}

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

// Functions calling other function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples, and ${orangePieces} oranges.`;
  return juice;
}

------------------------------------------------------------------------

CODING CHALLANGE #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
GOOD LUCK

const calcAverage = (s1, s2, s3) => s1 + s2 + s3 / 3;

const dolphinsAVG = calcAverage(44, 23, 71);
const koalasAVG = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...🏆');
  }
};

checkWinner(100, 200);

------------------------------------------------------------------------

ARRAYS

const friend1 = 'Michael';
const friend2 = 'Stever';
const friend3 = 'Peter';

const friends = [friend1, friend2, friend3];
console.log(friends);
console.log(friends[0]);
console.log(`Last element: ${friends[friends.length - 1]}`);

Array methods:

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
friends.push('Jay'); // returns array lenght
friends.unshift('John');
console.log(friends);

// Remove elements
const popped = friends.pop(); // returns the removed element
const shifted = friends.shift(); // returns the removed element
console.log(friends);

friends.push(23);
console.log(friends.indexOf('Steven')); // returns the index
console.log(friends.includes('23')); // returns boolean (strict equality)

if (friends.includes('peter')) {
  console.log('You have a friend called Peter');
}

------------------------------------------------------------------------

CODING CHALLANGE #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
GOOD LUCK

const bills = [125, 555, 44];

const calcTip = (bill) => {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(tips);
console.log(total);

------------------------------------------------------------------------

OBJECTS

const itachi = {
  firstName: 'Uchiha',
  lastName: 'Itachi',
  alive: false,
  job: 'shinobi',
  friends: ['Maki', 'Yori', 'Kenzaku'],
};

console.log(itachi.lastName); // Dot notation
console.log(itachi['firstName']); // Bracket notation

const nameKey = 'Name';
console.log(itachi['first' + nameKey]);
console.log(itachi['last' + nameKey]);

itachi.location = 'Hidden Leaf'; // Dot notation
itachi['twitter'] = '@itachi';

console.log(itachi);

console.log(
  `${itachi.lastName} has ${itachi.friends.length} friends, and his best friend is called ${itachi['friends'][0]}`
);

Object methods:

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriverLicense: true,

  // calcAge(birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge() {
  //   console.log(this);
  //   return 2023 - this.birthYear;
  // },

  calcAge() {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${jonas.firstName} is a ${jonas.age} years teacher, and ${
      jonas.hasDriverLicense ? 'he has' : 'he has not'
    } a drivers license`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);

// console.log(jonas['calcAge'](1958));

console.log(jonas.getSummary());
*/
