// Assignment 2 // 
document.write("<h1> Elzero </h1>");
document.querySelector("h1").style.color = 'blue';
document.querySelector("h1").style.fontSize = '80px';
document.querySelector("h1").style.fontWeight ='bold';
document.querySelector("h1").style.textAlign = 'center';
document.querySelector("h1").style.fontFamily = 'Arial';

// Assignment 3 //
console.log("%cElzero %cWeb %cschool","color:red ; font-size:40px",
"color:green ; font-size:40px ; font-weight:bold",
"color:blue ; font-size:40px");

// Assignment 4 // 

console.group("Group 1");
console.log("message one");
console.log("message two");
    console.groupCollapsed("Child group");
    console.log("message one");
    console.log("message two");
        console.groupCollapsed("Grand child group");
        console.log("message one");
        console.log("message two");
        console.groupEnd();
    console.groupEnd();
console.groupEnd();

console.group("Group 2");
console.log("message one");
console.log("message two");
console.groupEnd();


// Assignment 5 // 

console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);


// Assignment 6 //

// 1 // 

// console.log("Iam In Console");
// document.write("Iam In Page");

// 2 //

/* console.log("Iam In Console");
document.write("Iam In Page"); */ 
