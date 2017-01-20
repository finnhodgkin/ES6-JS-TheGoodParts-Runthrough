# The scope chain
### A Function within a function/s gain variables from its parent function/s.
  But *only* if they are **DECLARED** within their parent, not just **INVOKED**.
  
### To find these variables the child function looks to its 'outer environment'.
  The outer environment is **not** just the execution context one below in the stack.
  
  It's the 'outer environment' ('outer function') in the 'lexical environment':
  
  So if you logged a variable in a function that wasn't declared there, the function will follow the scope chain, 
  checking for the variable in all the outer functions until it reaches the global execution context. 
  As soon as it finds the variable it stops going back through the scope chain.
