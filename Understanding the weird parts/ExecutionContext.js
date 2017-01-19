b();
console.log(a); // line will log 'undefined' var hoists to undefinied
// IF let was used it would throw because let isn't hoisted.

var a = 'Hello World!';

function b() {
  console.log('Called b!');
}


// -----------------------------------------------------
