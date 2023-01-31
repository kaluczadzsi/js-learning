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

BOOLEAN LOGIC
*/
