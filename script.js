const identity = a => a;
const mul = (a, b) => a * b;
const add = (a, b) => a + b;
let result = mul(add(identity(3), identity(2)), 3) // 15;

const identityf = a => () => a;
const idf = identityf(5);
result = idf(); // 5

const addf = a => b => a + b;
result = addf(3)(3); // 6

const applyf = func => a => b => func(a, b);
result = applyf(mul)(2)(4); // 8

const curry = (func, a) => b => func(a, b);
const curryv2 = (func, a) => applyf(func)(a); // the same
result = curry(mul, 3)(2); // 6

const inc = addf(1);
result = inc(inc(inc(0))); // 3
const inc1 = applyf(add)(1);
result = inc1(inc1(inc1(0))); // 3
const inc2 = curry(add, 1);
result = inc2(inc2(inc2(0))); // 3

// THIS METHOD -
Number.prototype.add = a => this + a;
// IS NOT THE SAME AS -
Number.prototype.add = function (a) { return this; }
// Because 'this' in an arrow function does not create its own 'this' context
result = (2).add(1); // 3

// The below doesn't work for the above reason. The 'this' in the arrow
// function is NOT taken from where it was called:
// —
// const methodize = function (func) {
//   (a) => func(this, a);
// };

const methodize = function (func) {
  return function(...a) {
    return func(this, ...a);
  };
};

// Add all arguments
const addall = (...a) => [...a].reduce((x, y) => { return x + y }, 0);

Number.prototype.add = methodize(addall);
result = (3).add(2, 5); // 10

const demethodize = m => (a, ...b) => m.apply(a, b);
const demethodizeCall = m => (a, ...b) => m.call(a, ...b);
// ^^^ this would work too. ^^^
// Both set 'this' — 'apply' takes an array, 'call' takes a list of arguments.
result = demethodizeCall(Number.prototype.add)(5, 6, 7); // 18
result = demethodize(Number.prototype.add)(5, 6, 7, 8); // 26

const twice = func => a => func(a, a);
const double = twice(add);
const square = twice(mul);
result = twice(add)(10); // 20
result = double(10);     // 20
result = twice(mul)(10); // 100
result = square(10);     // 100

const composeu = (func, func2) => a => func2(func(a));
result = composeu(double, square)(3); // 36 (3 doubled (6). Result squared (36))

const composeb = (func, func2) => (a, b, c) => func2(func(a, b), c);
result = composeb(add, mul)(2, 3, 5); // 25;

// Limit function to once call. More will force an error.
const once = func => (...args) => {
  let f = func;
  func = null;
  return f(...args);
};
const add_once = once(add);
result = add_once(3, 4);

const counterf = val => { return {
    inc: () => val += 1,
    dec: () => val -= 1
  };
}
const counter = counterf(10);
counter.inc();          // 11
counter.inc();          // 12
counter.dec();          // 11
result = counter.inc(); // 12

const revocable = func => {
  return {
    invoke: (...args) => func(...args),
    revoke: () => func = null
  };
}
const revoadd = revocable(add);
// revoadd.revoke() <-- if this was uncommented the following line would throw.
result = revoadd.invoke(3, 4); // 7

console.log(result);
