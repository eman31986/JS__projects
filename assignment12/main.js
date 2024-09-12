// from 57 to 63 //
//1
function sayHello(theName, theGender) {
    if(theGender == "Male"){
        console.log(`Hello Mr ${theName}`);
    }
    else if(theGender == "Female"){
        console.log(`Hello Miss ${theName}`);
    }
    else
    console.log(`Hello ${theName}`);
}

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"
//___________________________________________________________________//
//2
function calculate(firstNum, secondNum, operation) {
    if(secondNum == undefined){
        console.log("Second Number Not Found")
    }
    else if(operation == "add" || operation == undefined){
        console.log(firstNum + secondNum);
    }
    else if(operation == "subtract"){
        console.log(firstNum - secondNum);
    }
    else if(operation == "multiply"){
        console.log(firstNum * secondNum);
    }
}
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600
//________________________________________________________________________//
//3
function ageInTime(theAge) {
    if(theAge < 10 || theAge > 100){
        console.log("Age out of range");
    }
    else{
        console.log(` Age in Months : ${theAge * 12}`);
        console.log(` Age in Weeks : ${theAge * 12 * 4}`);
        console.log(` Age in Days : ${theAge * 365}`);
        console.log(` Age in Hours : ${theAge * 365 * 24}`);
        console.log(` Age in Minuts : ${theAge * 365 * 24 * 60}`);
        console.log(` Age in Seconds : ${theAge * 365 * 24 * 60 * 60}`);
    }
}
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
//______________________________________________________//
//4
function checkStatus(a, b, c) {
    let name;
    let age;
    let status;
    typeof a === "string" ? name = a : typeof a === "number" ? age = a : status = a;
    typeof b === "string" ? name = b : typeof b === "number" ? age = b : status = b;
    typeof c === "string" ? name = c : typeof c === "number" ? age = c : status = c;
    status === true ? status = "You Are Available For Hire" : status = "You Are Not Available For Hire";
    document.write(`<p>"Hello ${name}, Your Age Is ${age}, ${status}"</p>`);
}


  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//_____________________________________________________________//
//5
function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write(`<select>`);
    for(let i = startYear; i <= endYear; i++){
        document.write(`<option value = "${i}">${i}</option>`)
    }
    document.write(`</select>`);
}
createSelectBox(2000, 2021);

//______________________________________________________________//
//6

function multiply(...numbers){
    let mul = 1;
    for(let i = 0 ; i < numbers.length ; i++){
        if(isNaN(numbers[i]) == false){
            mul *= parseInt(numbers[i]);
        }
    }
    console.log(mul);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
//____________________________________________________________//