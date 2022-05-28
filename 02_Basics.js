// JS is a high level(friendly) just-in-time compiled(compiled during execution and not before) language that confirms to the ECMAScript(works across any browser) specification

// JS only runs in Web Browser
// JS can be run outside the browser using JS runtime environment called NODEJS.JS is used to develop server side apps,cross platform mobile app with the help of NODEJS
// syntax and core concepts
console.log("external script file");
const arr = [1, 3, 5, 6, 5];
const obj = {
  "one-1": 1,
  two: "two",
  three: "3",
  isSix: true,
};

arr[3] = 19;
obj.one = 19;
obj.four = "four";
console.log(typeof obj.isSix);
console.log(arr.reverse());
console.log(obj);

// String Operator
console.log("Java" + "Script");

let checkTernary = 8;

let ternaryResult = checkTernary == 8 ? "Yes" : "No";
console.log(ternaryResult);

// Type Conversions
// non numbers gives NaN
// boolean acts as 1 and 0 to true and false
console.log(1 + 1);
console.log("1" + 1);

console.log(true + 1);
console.log(true + "1");
console.log(1 + true);
console.log("1" + true);

console.log(2 * "3");
console.log("2" * 3);
console.log(2 / 3);
console.log(2 / "3");

console.log("JS" / "CPP");

console.log(Number("5"));
console.log(parseInt("5.1"));
console.log(parseFloat("5.1"));
console.log((5.1).toString());
console.log(Boolean("  "));
