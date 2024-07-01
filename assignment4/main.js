// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000); // 100000
console.log(1_000_00); // 100000
console.log(10e4); // 100000
console.log(10 ** 5); // 100000
console.log(Math.floor(100000.4)); // 100000
console.log(Math.ceil(99999.4)); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.round(99999.7)); // 100000
console.log(2e4 + 8e4); // 100000
console.log(100 * 1000); // 100000

//___________________________________________________________________________________________//

console.log(Number.MIN_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

//___________________________________________________________________________________________//

console.log(Number.MAX_SAFE_INTEGER); // 16

//___________________________________________________________________________________________//

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

//___________________________________________________________________________________________//

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//___________________________________________________________________________________________//

let flt = 10.4;

console.log(flt.toFixed(0)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10

//___________________________________________________________________________________________//

console.log(Math.random(1,0,2,3,4)); // 0 || 1 || 2 || 3 || 4