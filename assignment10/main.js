// from 48 to 53 // 
//1
let start = 10;
let end = 100;
let exclude = 40;

// Output
/*10
20
30
50
60
70
80
90
100 */
for(let i = start; i <= end ; i+=start){
    if(i == exclude){
        continue;
    }
    console.log(i);
}
//___________________________________________________________________//
//2
let _start = 10;
let _end = 0;
let stop = 3;

// Output
/*10
09
08
07
06
05
04
03*/
for(let i = _start ; i >= stop ; i--){
    if(i < _start){
        console.log(`${_end}${i}`);
    }
    else{
        console.log(`${i}`);
    }
}
//____________________________________________________________________//
//3
let start_ = 1;
let end_ = 6;
let breaker = 2;

// Output
/*1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4 */
for(let i = start_ ; i <= end_ ; i++){
    console.log(i);
    console.log(`-- ${breaker}`)
    console.log(`-- ${end_ - breaker}`)

}
//________________________________________________________________//
//4
let index = 10;
let jump = 2;

for (;;) {
    for(let i = index; i > jump ; i -= jump){
        console.log(i)
    }
    break;
}
// Output
/*10
8
6
4*/
//___________________________________________________________________//
//5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let i =0 , j = 0; i < friends.length ; i++){
    if(friends[i][0] == letter.toLocaleUpperCase()){
        continue;
    }
    else{
        console.log(`${j+1} => ${friends[i]}`);
        j++;
    }
}
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
//_________________________________________________________________//
//6
let s_tart = 0;
let swappedName = "elZerO";
let arr = [];
for(let i = s_tart; i < swappedName.length ; i++){
    let char = swappedName.charAt(i);
    if(char == char.toUpperCase()){
        arr[i] = char.toLowerCase();
    }
    else if(char == char.toLowerCase()){
        arr[i] = char.toUpperCase();
    }
}
console.log(arr.join(""));

// Output
"ELzERo"
//_________________________________________________________________//
//7
let st_art = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i = st_art+mix[st_art]; i <= mix.length ; i++ ){
    if(isNaN(mix[i])){
        continue;
    }
    else{
        console.log(mix[i]);
    }

}

// Output
2
3
4
//___________________________________________________________________//