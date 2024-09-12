//1
// Test Case 1
//let num = 9; // "009"
// Test Case 2
//let num = 20; // "020"
// Test Case 3
let num = 110; // "110"
if(num < 10){
    console.log(`00${num}`)
}
else if(num > 10 && num < 100){
    console.log(`0${num}`)
}
else if(num >= 100){
    console.log(`${num}`)
}
//_________________________________________________//
//2
let num1 = 9;
let str = "9";
let str2 = "20";

if(num1 == str){
    console.log("{num1} Is The Same Value As {str}")
    if(typeof(num1) == typeof(str)){
        console.log("{num1} Is The Same Value As {str} AND The Same Type")
    }
    else{
        console.log("{num1} Is The Same Value As {str} But Not The Same Type")
    }
}
if(num1 !== str2){
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
}

if(str == str2 && typeof(str) == typeof(str2)){
    console.log("{str} Is The Same Type As {str2} AND The Same Value")
}
else if(str != str2 && typeof(str) == typeof(str2)){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}
else if(str == str2 && typeof(str) != typeof(str2)){
    console.log("{str} Is NOT Same Type As {str2} But The Same Value")
}
// Output
/*"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
*/
//__________________________________________________________//
//3
let num1_ = 10;
let num2 = 30;
let num3 = "30";

if(num3 > num1_ && typeof(num3) != typeof(num2) && num2 == num3 && num3 !== num1_ ){
    console.log(`${num3} Is Larger Than ${num1_} And Type string Not The Same Type As number`)
    console.log(`${num3} Is Larger Than ${num1_} And Value Is The Same As ${num2} And Type string Not The Same Type As number`)
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
}

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
//_______________________________________________________________//
//4
// Edit What You Want Here

let _num1 = 11;
let _num2 = 10;
let _num3 = 11;
let _num4 = 33;

/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/

// Condition 1

if (_num1 > _num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (_num1 > _num2 && _num1 < _num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (_num1 > _num2 && _num1 === _num3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((_num1 + _num2) < _num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((_num1 + _num3) < _num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((_num1 + _num2 + _num3) < _num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (_num4 - (_num1 + _num3) + _num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}
//__________________________________________________//
//  Switch Statement //

//let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
//let day = "Friday";
//let day = "Saturday";
//let day = "Sunday";
// Output => "No Appointments Available"
//let day = "Monday";
//let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"
//let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"
//let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"
let day = "World";
// Output => "Its Not A Valid Day"

if( !day.startsWith(" ") && !day.endsWith(" ") && day[0] == day[0].toUpperCase()){
switch(day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
        break;
}
}
else{
    day.trim().charAt(0).toUpperCase();
    console.log(`You Need To Remove Spaces And Make First Letter Capital => ${day.trim().charAt(0).toUpperCase() + day.trim().slice(1)}` );
}