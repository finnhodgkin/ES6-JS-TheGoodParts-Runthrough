# Stuff to look for when debugging —
### Type coercion:
  * 1 + '2' = '12'

### Multiple comparisons:
  * 3 < 2 < 1 = true

Comparisons run from left to right so for above:

  * '3 < 2 = false' and then 'false (0) < 1' =  true

### Checking if variable exists when variable is set to 0 (will coerce to false)
  * var a = 0;
  * if (a) { console.log('yes'); } else { console.log('no')}
  * // WILL NOT RUN.

A fix for this, when the value is '0' is needed is:
  * if (a || a === 0) { console.log('yes'); }
  
