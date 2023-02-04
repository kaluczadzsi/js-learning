'use strict';
/* 
JIT = Just In Time compilation
AST = Abstract Syntax Tree

code -> parsing (AST) ->
compilation (takes AST, compiles it into machine code, (JIT)) ->
gets executed right away (happens in callstack),
during execution code being optimized, recompiled

JS runtime in the browser:

JS ENGINE + WEB APIs + CALLBACK QUEUE

heart of js runtime -> JS ENGINE: (HEAP, CALLSTACK)
WEB APIs -> (DOM, FETCH API, TIMES, ETC) NOT PART OF THE JS ENGINE ITSELF
JS get acces to APIs through the global window object
CALLBACK QUEUE

------------------------------------------------------------------------

EXECUTION CONTEXT

Compilation 
-> Creation of global exectuion context(for top level code) NOT INSIDE A FUNCTION!

ONE EXECUTION CONTEXT per function:
for each function call, a new execution context is created.

WHAT'S INSIDE EXECUTION CONTEXT?


Generated during 'Creation phase', right before execution -> {

  1 - VARIABLE ENVIROMENT

  let, const, and var declarations
  Functions
  arguments object
  
  2 - SCOPE CHAIN
  
  3 - THIS KEYWORD
}

ARROW FUNCTIONS: NO ARGUMENTS KEYWORD, NO THIS KEYWORD!!

------------------------------------------------------------------------

SCOPE AND THE SCOPE CHAIN

There is global scope, function scope, and block scope

GLOBAL:

  outside of any functions or block
  accessible everywhere

  const job = 'teacher'

FUNCTION:

  variables are accessible only inside function, NOT outside
  also called local scope

  function calcAge(birthYear) {
    const now = 2023;
  }
  
  console.log(now); // ReferenceError

BLOCK:

  variables are accessible only inside block (block scoped)
  HOWEVER, this only applies to let and const variables!
  Functions are also block scoped (only in strict mode)

  if(year > 2000) {
    const x = 10;
  }

  console.log(x); // ReferenceError

  let, const -> block scoped
  var -> function scoped

  Scoping in practise

  function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT';
    }
    // console.log(str); str is not defined
    console.log(millenial);
    // console.log(add(5, 2));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1994);
// console.log(age); cannot access
// printAge(); cannot access

------------------------------------------------------------------------

HOISTING AND TDZ

TDZ: TEMPORARY DEAD ZONE

Hoisting: Makes some types of variables accessible/usable
 in the code before they are actually declared.
"Variables lifted to the top of their scope."

Before execution, code is scanned for variable declarations,
and for each variable, a new property is created in 
VARIABLE ENVIROMENT OBJECT.

HOISTED, INITIAL VALUE, SCOPE?

function declarations:          y, Actual function, BLOCK (in strict mode, otherwise: function)
var variables:                  y, undefined, FUNCTION
let and const variables:        n, (uninitalized,TDZ,) BLOCK

function expression and arrows: DEPENDS VAR OR LET:
With var: hoisted to undefined,
With let or const: not useable before declaration


WHY TDZ?

  Makes it easier to avoid and catch errors:
  accessing variables before declaration is bad practise and should be avoided;

  Makes const variables actually work

  console.log(me);
  console.log(job);
  console.log(year);


HOISTING AND TDZ IN PRACTISE

  var me = 'Jonas';
  let job = 'Teacher';
  const year = 1991;

  console.log(addDecl(2, 2));
  console.log(addExpr(2, 2));
  console.log(addArrow(2, 2));

  function addDecl(a, b) {
    return a + b;
  }

  const addExpr = function (a, b) {
    return a + b;
  };

  const addArrow = (a, b) => a + b;

      
  // numProducts = undefined
  if (!numProducts) deleteShoppingCart();
  var numProducts = 10;
  function deleteShoppingCart() {
    console.log('All products deleted!');
  }

------------------------------------------------------------------------

THIS KEYWORD

  method: this = <Object that is calling the method>

    const jonas = {
    age: 28,
    getAge: function () {
      console.log(this);
      return this.age;
      //jonas.age
    },
  };

  simple function call: this = undefined (in strict mode, otherwise window)

      function test() {
      console.log(this);
    }

    test();

    arrow function call: this = <this of surronding funcion(lexical this)ű
    (ARROW FUNCTIONS DO NOT GET THEIR OWN THIS KEYWORD)



    Event Listener: this = <DOM ELEMENT that the handler is attached to>

      document.querySelector('h1').addEventListener('mouseover', function test() {
      console.log(this);
    });

THIS KEYWORD IN PRACTISE

    console.log(this); // Window

  const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined
  };
  calcAge(1991);

  const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // Window (parent scope)
  };
  calcAgeArrow(1991);

  const jonas = {
    birthYear: 1991,
    calcAge() {
      console.log(this);
      console.log(2037 - this.birthYear);
    },
  };

  jonas.calcAge(); 

    const jonas = {
    year: 1991,
    calcAge() {
      console.log(this);
      console.log(2037 - this.year);
      // This keyword points to the object
      // that is calling the method
    },
  };

  const matilda = {
    year: 2017,
  };

  // Method borrowing
  matilda.calcAge = jonas.calcAge;
  matilda.calcAge();

------------------------------------------------------------------------

  REGULAR FUNCTIONS VS ARROW FUNCTIONS

  const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge() {
    console.log(this);
    console.log(2037 - this.year);

    /* SOLUTION 1:

    const self = this; // jonas
    const isMillenial = function () {
    console.log(this); //undefined
    console.log(self.year >= 1981 && self.year <= 1996);
    };

        // SOLUTION 2
        const isMillenial = () => {
          // ARROW FUNCTION INHERITS THIS KEYWORD FROM PARENT SCOPE
          console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
      },

      greet: () => {
        console.log(`Hey ${this}`);
        //Arrow function does not get his own this keyword
      },
    };

    jonas.calcAge();

      // Arguments
      const addExpr = function (a, b) {
        // ARGUMENST ARRAY
        console.log(arguments);
        return a + b;
        0;
      };

      addExpr(2, 5, 8, 9);
      var addArrow = (a, b) => {
        // THERE IS NO ARGUMENTS ARRAY
        console.log(arguments);
        return a + b;
      };

------------------------------------------------------------------------

PRIMITIVES VS OBJECTS


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 33;

console.log(friend);
console.log(me);

*/
