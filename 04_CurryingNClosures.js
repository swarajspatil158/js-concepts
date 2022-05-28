// ------------------------------------------------
// Currying
console.log("Currying");
function multiply(x) {
  return function inner(y) {
    console.log(x * y);
  };
}
function multiply(x, y) {
  console.log(x * y);
}

var multiplyByTwo = multiply.bind(this);
multiplyByTwo(4, 4);
var multiplyByThree = multiply.bind(this, 3);
multiplyByThree(4);

// ------------------------------------------------
// Closures - Data hiding, Currying
console.log("Closures");

function outest() {
  let one = 1;
  function outer() {
    let two = 2;
    function inner() {
      console.log(one);
    }
    return inner;
  }
  return outer;
}
outest()()();

function calculator() {
  var count = 0;
  this.increment = function () {
    count++;
    console.log(count);
  };
  this.decrement = function () {
    count--;
    console.log(count);
  };
}

var calculate = new calculator();
calculate.decrement();
calculate.decrement();
