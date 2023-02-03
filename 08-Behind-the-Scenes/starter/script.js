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

*/
