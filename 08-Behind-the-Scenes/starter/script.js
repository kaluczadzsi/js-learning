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

heart of js runtime -> JS ENGINE (HEAP, CALLSTACK)
WEB APIs -> (DOM, FETCH API, TIMES, ETC) NOT PART OF THE JS ENGINE ITSELF
JS get acces to APIs through the global window object
CALLBACK QUEUE


*/
