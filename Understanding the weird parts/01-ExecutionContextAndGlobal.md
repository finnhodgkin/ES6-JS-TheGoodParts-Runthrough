--------------------------------------------------------------------------------

# Syntax parser / compiler / interpreter:
  Translates and compiles your code into a computer readable version.

# Lexical environment:
  Scope of your program.

# Execution context:
  A wrapper to manage the code that is running. Contains all variables etc. In browser it contains things like 'Window' and 'Document'.

--------------------------------------------------------------------------------

# Name/Value pair:
  A name which maps to a unique value.
  Variables --> stored values.
  For example:
    Address = '100 Main St.'

# Object:
  A collection of Name/Value pairs.
  For example:
    Address:
    {
      Street: 'Main',
      Number: 100,
      Apartment:
      {
        Floor: 3,
        Number: 301
      }
    }

--------------------------------------------------------------------------------

# Global environment and the global object
  Anything not inside a function ('window' in the browser).

# Global execution context creates two things for you:
  A 'global' object
  A base 'this' variable

--------------------------------------------------------------------------------

# Execution Context contents
  Global Object
  'this'
  Outer Environment
  Your Code

## Execution Context has a creation phase
  During this process it creates the Global Object, etc.
  But it also sets up memory for the variables and function in your code and hoists where necessary.
  ALL variables in JS are initially set to undefined in this phase.

## Then an execution phase
  Runs through your code line by line. Variables and functions have already been
  created / hoisted. 

## ! Generally good practice to declare before using even with hoisting !

--------------------------------------------------------------------------------

# Undefined vs NOT defined
  'Undefined'   — Value of variable (Name) equals 'undefined'. Not yet set.
  'Not defined' — No variable (Name) exists at all. Will throw if you try to
                  use the variable

--------------------------------------------------------------------------------

# Javascript is single threaded. Only runs one task at a time.
  Generally synchronous
  Not necessarily in Node.js and the browser.

--------------------------------------------------------------------------------
