// from 86 to 93 //
//1
let var1 = document.getElementById("elzero");
console.log(var1);
let var2 = document.getElementsByTagName("div")[0];
console.log(var2);
let var3 = document.getElementsByName("js");
console.log(var3);
let var4 = document.getElementsByClassName("element");
console.log(var4);

let var5 = document.querySelector("#elzero");
console.log(var5);
let var6 = document.querySelector(".element");
console.log(var6);
let var7 = document.querySelector("div");
console.log(var7);
let var8 = document.querySelector("[name = 'js']"); //****************//
console.log(var8);

let var9 = document.querySelectorAll("div")[0];
console.log(var9);
let var10 = document.querySelectorAll(".element")[0];
console.log(var10);
let var11 = document.querySelectorAll("#elzero")[0];
console.log(var11);
let var12 = document.querySelectorAll("[name = 'js']")[0];
console.log(var12);

let var13 = document.body.firstElementChild;
console.log(var13);
let var14 = document.body.children[0]; //.body//
console.log(var14);
let var15 = document.body.children[0]; //.body//
console.log(var15);

//_____________________________________________________________________//
//2

/*let change = document.getElementsByTagName("img");
console.log(change);*/

let change = document.getElementsByClassName("p"); // it changed the attribute's value in the console //

for(let i = 0 ; i < change.length ; i++){
    change[i].setAttribute("src" , "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"); 
    change[i].alt = "Elzero Logo";
    //console.log(change[i].getAttribute("src"));
    //console.log(change[i].getAttribute("alt"));
}

//___________________________________________________________________//
//3
// important example //

let num = document.getElementsByTagName("input")[0];
let res = document.getElementsByClassName("result")[0];

//console.log(num);

/*num.on = function(){
    res.innerHTML = `${num.value} USD Dollar = ${(num.value * 15.6).toFixed(2)} Egyptian Pound`;
};
*/

num.addEventListener('input', function() {
    res.innerHTML = `${num.value} USD Dollar = ${(num.value * 15.6).toFixed(2)} Egyptian Pound`;
});

//_____________________________________________________________//
//4
/*  // from this //
<div class="one" title="two">Two</div>
<div class="two" title="one">One</div>
*/
/*  // to this //
<div class="one" title="one">One</div>
<div class="two" title="two">Two 2</div>
*/

//run the code in html to run every thing truly

let one = document.querySelector(".one");
let two = document.querySelector(".two");

let class_one = one.title;
let class_two = two.title;

one.title = class_two; // one.title = two.class;
two.title = class_one; // two.title = one.class; 

console.log(one.title);
console.log(two.title);

one.innerHTML = one.title;
two.innerHTML = two.title + "" + two.attributes.length;

// to write 2 here we usedthe length property //
console.log(one);
console.log(two);

//___________________________________________________________//
//5

let element = document.getElementsByClassName("pic");
//console.log(element);

for(let i = 0 ; i < element.length ; i++){
    //element[i].hasAttribute("alt");
    if(element[i].hasAttribute("alt")){ // true
        element[i].alt = "Old";
    }
    else{
        element[i].alt = "Elzero New";
    }
}
console.log(element);

//________________________________________________________________//
//6

let input1 = document.getElementsByName("elements"); // number of repetition //
let input2 = document.getElementsByName("texts");    // tex in element//

let el = document.getElementsByClassName("results");
let click = document.getElementsByName("create");

let f = document.getElementsByTagName('Form')[0];
f.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
});

click.onclick = function () {

for(let i = 0 ; i < input1 ; i++){
    let box = document.createElement("div");
    box.class = "box";
    box.title = "Element";
    box.id = `id-${i+1}`;
    box.innerHTML = input2;
    el.appendChild(box);
    console.log(box);
}
}

