//1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num-num,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
for(let i = num-num;i<num;i++){
console.log(myFriends[i]); // ["Ahmed", "Elham", "Osama"];
}
//_____________________________________________________________//
//2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop()
console.log(friends); // ["Eman", "Osama"]
//_________________________________________________________________//
//3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(arrOne,arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//_________________________________________________________________//
//4
let website = "Go";
let words = [["Elzero", "Web", "School"],`${website}ogle`, "Facebook"];

console.log(words[0][0].slice(words.length - 1)); // ZERO //*****//
//_______________________________________________________________//
//5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
//1
for(let i =0; i< haystack.length ; i++){
    if(haystack[i] == "JS"){
        console.log("Found");
    }
}
//2
if(haystack.indexOf("JS") != -1){
    console.log("Found");
}
//3
if(haystack.includes("JS") == true){
    console.log("Found");
}
//__________________________________________________________________//
//6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr1[arr1.length -1] , arr2.slice(2));
allArrs = allArrs.sort().map(e => e.toLowerCase());

console.log(allArrs); // fxy
//____________________________________________________________________//