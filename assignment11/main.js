// from 54 to 56 
//1
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
"1 => Sayed"
"2 => Mahmoud"

while(index < friends.length){
    if(typeof friends[index] === "number" || friends[index].startsWith("A")){
        index++;
        continue;
    }
    console.log(`"${++counter} => ${friends[index]}"`);
    index++;
}