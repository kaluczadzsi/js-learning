/* 
CODING CHALLANGE #1
 
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightMark ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI); 

const greet = 'Welcome';
const name = 'Gabor';
console.log(`${greet} ${name}`);
console.log('Regular string...');
console.log('String with \n multiple \n lines');


const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😊`);
}

------------------------------------------------------------------------

CODING CHALLANGE #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
GOOD LUCK 

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightMark ** 2;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's!`);
}

------------------------------------------------------------------------

TYPE CONVERSION

let inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number('Gabor')); //NaN, Invalid number
console.log(typeof NaN); // result = number
console.log(String(1991), 23);

TYPE COERCION

console.log('I am ' + 29 + ' years old');
console.log('I am ' + '29' + ' years old'); // SAME

console.log('23' - '10' - 3); // 10
console.log('23' + '10' + 3); // 23103
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5

let n = '1' + 1;
n = n - 1;
console.log(n); // n = 10

------------------------------------------------------------------------

TRUTHY AND FALSY VALUES

5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // False
console.log(Boolean(undefined)); // False
console.log(Boolean('Kakashi')); // False
console.log(Boolean('')); // True
console.log(Boolean({})); // True

const money = 0;

if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job!`);
}

let height; // undefined

if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

------------------------------------------------------------------------

EQUALITY OPERATORS

const age = 18;
if (age === 18) console.log('You just become adult'); // return True or False
if (age === '18') console.log('You just become adult (strict)'); // False  (Does not perform type coercion!)
if (age == '18') console.log('You just become adult (loose)'); // True (Type coercion) AVOID it!

const favourite = Number(prompt(`What's your favourite number?`));

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

if (favourite !== 23) {
  console.log('Why not 23?');
}

------------------------------------------------------------------------

LOGICAL OPERATORS

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log('Sarah is able to drive! 🚗');
} else {
  console.log('Someone else should drive...');
}

------------------------------------------------------------------------

CODING CHALLANGE #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK


const dolphinsScore = 96 + 108 + 89;
const koalasScore = 88 + 91 + 110;

const dolphinsAVG = dolphinsScore / 3;
const koalasAVG = koalasScore / 3;
const minScore = 100;

if (dolphinsAVG > koalasAVG) {
  console.log('Dolphins won');
} else if (koalasAVG > dolphinsAVG) {
  console.log('Koalas won');
} else {
  console.log('DRAW');
}

if (dolphinsScore > koalasScore && dolphinsScore >= minScore) {
  console.log('Dolphins won');
} else if (koalasScore > dolphinsScore && koalasScore >= minScore) {
  console.log('Koalas won');
} else if (
  koalasScore >= minScore &&
  dolphinsScore >= minScore &&
  koalasScore === dolphinsScore
) {
  console.log('DRAW');
} else {
  console.log('No team wins...');
}

------------------------------------------------------------------------

STATEMENTS AND EXPRESSIONS

EXPRESSIONS:
expressions = produces a value

3 + 4
1991
true && false && !false

STATEMENT:
statements = perform some actions

if (23 > 10) {
  const str = '23 is bigger';
}

console.log(`I'm ${2037 - 1991} years old`);

------------------------------------------------------------------------

TERNARY OPERATOR

const age = 28;
age >= 18
  ? console.log('I like to drink Wine 🍷')
  : console.log('I like to drink Water 💧');

console.log(`I like to drink ${age > 18 ? 'Wine 🍷' : 'Water 💧'}`);

------------------------------------------------------------------------

CODING CHALLANGE #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300
GOOD LUCK


const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
