// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

//________________________________________________________________________//

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(num * (num + num) / num); // 6

// Soultion Four
console.log(num * num / num + num); // 6

// Solution Five
console.log(num += num); // 6

// Solution Six
console.log(num) // 6

//______________________________________________________________________//

let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(Number(num2) + Number(num2)); // 20

// Solution Three
console.log(Number(num2) + +num2); // 20

// Solution Four
console.log( --num2 + ++num2 + true ); // 20

//______________________________________________________________________//

let points = 10;

// Write Your Code Here

console.log(((++points + --points) % --points) + ++points ); // 13

// Write Your Code Here

console.log(--points - true); // 8;