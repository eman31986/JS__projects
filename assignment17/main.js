// from 94 to 101 // 
//3
let p = document.getElementsByTagName("p")[0];
let dd = document.querySelector(".our-element");
let div1 = dd.cloneNode();
let div2 = dd.cloneNode();

p.remove();

function addattr( el , no ){
    el.className = no.toLowerCase();
    el.title = `${no} element`;
    el.setAttribute("data-value",no);
    el.textContent = no;
}

addattr(div1,"Start");
addattr(div2,"End");

dd.before(div1);
dd.after(div2);

//____________________________________________//

//4 
let dv = document.querySelector(".ass4");
console.log(dv.lastChild.nodeValue.trim());

//____________________________________________//

//5

// Add an event listener to the document
document.addEventListener('click', function(event) {
// Get the clicked element
var clickedElement = event.target;
// Log the tag name of the clicked element to the console
console.log(clickedElement.tagName);
});