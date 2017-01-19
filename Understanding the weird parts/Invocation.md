# Every time a function is invoked in your code it is added to a new Execution context and added to the stack
  The top of the stack is run first. For example if you have a function 'b', invoked inside a function 'a', then the stack follow this process:
    'a' -
          runs through a until it hits the invocation for 'b'
    'b' -
          a new execution context for 'b' is created and takes the top spot in
          the stack. Once it has finished running the execution context is removed or 'popped' and 'a' goes back to the top of the stack.
    'a' -
          'a' then runs through until it finishes and the 'global execution
          context' goes back to the top of the stack
    'glob. exec. cont.' -
          top (and only) member of the stack until it hits
          another invocation.


  If the function 'b' was contained within 'a' then the execution would be
  handled differently (scope):
    'a' -
          a new 
