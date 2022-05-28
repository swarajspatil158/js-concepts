// hoisting
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
var hoistedVariable;

// this keyword
var obj1 = {
  address: "Mumbai,India",
  getAddress: function () {
    console.log(this.address);
  },
};
obj1.getAddress();
var getAddress = obj1.getAddress;
var obj2 = { address: "Pune MH", getAddress };
obj2.getAddress();

// call() function
function yourAdd(pincode) {
  return "address : " + this.address + " " + pincode;
}
var obj3 = { address: "Nasik MH" };
console.log(yourAdd.call(obj3, "421 501"));

// apply()
function saySomething(message) {
  return this.name + " is " + message;
}

var person4 = { name: "Swaraj" };

console.log(saySomething.apply(person4, ["awesome"]));

// bind()
var myTech = {
  displayDetails: function (laptop, os) {
    return this.name + "," + "laptop: " + laptop + "," + "os: " + os;
  },
};
var person1 = { name: "Swaraj" };
var techOfPerson1 = myTech.displayDetails.bind(person1, "dell i5", "POP OS");
console.log(techOfPerson1());

// currying
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
console.log(multiply(2)(2));

function add(a, b) {
  return a + b;
}
function curryingAdd(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

var curriedAdd = curryingAdd(add);
console.log(add(2, 2));
console.log(curriedAdd(2)(2));

// closures
function randomFunc() {
  var obj1 = { name: "Vivian", age: 45 };

  return function () {
    console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the randomFunc function is executed
  };
}

var initializeClosure = randomFunc(); // Returns a function

initializeClosure();

// constructor
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var person1 = new Person("Vivek", 76, "male");
console.log(person1);

var person2 = new Person("Courtney", 34, "female");
console.log(person2);

//   arrow(good for callbacks/map/reduce/filter) vs function expressions(good for object methods)
let obj4 = {
  myVar: "foo",
  myFunc: function () {
    console.log(this.myVar);
  },
};
obj4.myFunc();
// scope  let vs var
var variable1 = 23;

let variable2 = 89;

function catchValues() {
  console.log(variable1);
  console.log(variable2);

  // Both the variables can be accessed anywhere since they are declared in the global scope
}

console.log(window.variable1); // Returns the value 23

console.log(window.variable2); // Returns undefined

// generators
function* genFunc() {
  yield 3;
  yield 4;
}
console.log(genFunc()); // Returns Object [Generator] {}
console.log(genFunc().next()); // Returns {value: 3, done:false}
console.log(genFunc().next()); // Returns {value: 3, done:false}

function* iteratorFunc() {
  let count = 0;
  for (let i = 0; i < 2; i++) {
    count++;
    yield i;
  }
  return count;
}

let iterator = iteratorFunc();
console.log(iterator.next()); // {value:0,done:false}
console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next()); // {value:2,done:true}

//  Object Destructuring

const classDeatils = {
  benches: 12,
  blackBoards: 2,
  fans: 4,
};
const {
  benches: noOfBenches,
  blackBoards: noOfBlackBoards,
  fans: noOfFans,
} = classDeatils;
console.log(noOfBenches);
console.log(noOfBlackBoards);
console.log(noOfFans);

const arr = [1, 2, 3, 4];
const [first, second, third, fourth] = arr;

console.log(first); // Outputs 1
console.log(second); // Outputs 2
console.log(third); // Outputs 3
console.log(fourth); // Outputs 4

function bigFunc(element) {
  let newArray = new Array(700).fill("♥");
  return (element) => newArray[element];
}
let cloFun = bigFunc();
cloFun(500);
cloFun(670);

function randomFuncTwo() {
  for (var i = 0; i < 2; i++) {
    console.log(i);
  }
}

randomFuncTwo();
// Prototypal Inheritance and this
let animal = {
  eats: true,
  walk() {
    console.log("Another animal");
  },
};
let bird = {
  fly: true,
  veg: 120,
  speed() {
    console.log(this.veg);
  },
};
let wild = {
  runs: true,
  // veg:190,
  __proto__: bird,
};

// wild.__proto__=animal
// wild.walk()
wild.speed();

// Strings
let string = new String("Swaraj");

function reverseString(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string.substring(i, i + 1);
  }
  return result;
}
console.log(reverseString(string));
console.log(string.split("").reverse().join(""));

// Arrays
let str = "This is is a Test Test String";

function removeDuplicates(str) {
  let arr = str.split(" ");
  arr = new Set(arr);
  const newString = [...arr];
  return newString.join(" ");
}
console.log(removeDuplicates(str));

let arrTwo = [1, 2, [3, 4, [5, 6, 7], 8, 9], 10, 11];

function flattenArray(arr) {
  let flatArray = arr.reduce((acc, curVal) => {
    return acc.concat(curVal);
  }, []);
  return flatArray;
}
console.log(flattenArray(arrTwo));

// ------------------
function counter() {
  let count = 0;
  this.increment = function () {
    count++;
    console.log(count);
  };
  this.decrement = function () {
    count--;
    console.log(count);
  };
}

var counting = new counter();
counting.increment();
counting.increment();
counting.increment();
counting.decrement();

// Reduce

const users = [
  { firstName: "Swaraj", age: 21 },
  { firstName: "Sarvesh", age: 21 },
  { firstName: "Nishad", age: 24 },
  { firstName: "Rutik", age: 25 },
  { firstName: "Manish", age: 26 },
  { firstName: "Aadesh", age: 27 },
];
let output = users.reduce(function (acc, curr) {
  if (curr.age < 22) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output);
