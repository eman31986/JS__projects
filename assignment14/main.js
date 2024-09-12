// from 71 to 78 
//1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// Elzero
let arr = mix.map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
}).reduce(function (acc,current){
    return acc+current;
}).trim();
console.log(arr);

//______________________________________________________________//
//2

let myString = "EElllzzzzzzzeroo";
// Elzero

let newString = myString.split("").filter( function (ele , index){
    return myString.indexOf(ele) === index ? ele : ""; 
})
.reduce(function(acc,current){
    return acc+current;
})
.trim();

console.log(newString);
//________________________________________________________________//
//3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
// Elzero
let newarr = myArray.reduce(function(acc,current){
    return acc.concat(current);
},[])
.reduce(function(acc,current){
    return acc+current;
});
console.log(newarr);
//_________________________________________________________________//
//4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// [-1, -10, 10, 20, -5, -3]

let newray = numsAndStrings.filter(function(ele){
    return  !isNaN(parseInt(ele)) ? ele : "";
}).map(function(ele){
    return -ele;
});
console.log(newray);
//________________________________________________________________//
//5
let nums = [2, 12, 11, 5, 10, 1, 99];
// 500
let result = nums.reduce(function(acc,current){
    return current % 2 == 0 ? acc*current : acc+current;
},1)
console.log(result);
//__________________________________________________________________//
//finished//