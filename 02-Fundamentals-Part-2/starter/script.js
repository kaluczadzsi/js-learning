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

------------------------------------------------------------------------

CODING CHALLANGE #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};


if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s (${mark.calcBMI()})!`
  );
} else if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s (${john.calcBMI()})!`
  );
}

------------------------------------------------------------------------

FOR LOOP

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

const arr = [
  'Uchiha',
  'Itachi',
  2037 - 1994,
  'shinobi',
  ['Yusuke', 'Kageyoshi', 'Suzuya'],
  true,
];

const arrTypes = [];
for (let i = 0; i < arr.length; i++) {
  arrTypes.push(typeof arr[i]);
}

console.log(arrTypes);

// continue and break

// only strings
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== 'string') continue;
  console.log(arr[i]);
}
// continue and break

// break with number
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') break;
  console.log(arr[i]);
}

const arr = [
  'Uchiha',
  'Itachi',
  2037 - 1994,
  'shinobi',
  ['Yusuke', 'Kageyoshi', 'Suzuya'],
  true,
];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(i, arr[i]);
}

// loop in loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise: ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
}

------------------------------------------------------------------------

WHILE LOOP

let rep = 1;
while (rep <= 10) {
  console.log(console.log(rep));
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log('You rolled a ' + dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log('Loop is about to end...');
  }
}

------------------------------------------------------------------------

CODING CHALLANGE #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum / arr.length;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(bills));
*/
