# Stuff to look for when debugging —
### Type coercion:
  * 1 + '2' = '12'

### Multiple comparisons:
  * 3 < 2 < 1 = true
  
Because comparisons run from left to right so '3 < 2 = false' and then 'false (0) < 1' =  true
