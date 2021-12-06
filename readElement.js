var h1Tags = document.getElementsByTagName("h1")
console.log(h1Tags);

for (var singleElement of h1Tags) {
    console.log(singleElement);
    singleElement.style.background= "lightgreen"
}

var sameClassTags = document.getElementsByClassName("demo");
// console.log(sameClassTags);

var x = document.querySelector('h1');//tag name
var x = document.querySelector('.demo');//class name
var x = document.querySelector('#topic');// id
console.log(x);

var y = document.querySelectorAll('h1');//tag name
var y = document.querySelectorAll('.demo');//class name
var y = document.querySelectorAll('#topic');// id
console.log(y);



function myFunction() {
    var div = document.getElementById("myDIV").className = "mystyle";
    
    console.log(div);
  }
