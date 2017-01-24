# Stuff to look for when debugging —
### Type coercion:
  * 1 + '2' = '12'

### Multiple comparisons:
  * 3 < 2 < 1 = true

Comparisons run from left to right so for above:

  * '3 < 2 = false' and then 'false (0) < 1' =  true
