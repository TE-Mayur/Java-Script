var techList = document.querySelector("#tech");
console.log(techList.childNodes);
function addTechnology() {
    var x = document.createElement("li");
    var userInput = prompt("Enter the technology")
    x.innerHTML= userInput;
    techList.appendChild(x);
    // techList.insertBefore(x,techList.firstElementChild.nextElementSibling);
    // techList.insertBeforex(x,techList.childNodes[3])    
}

function deleteTech() {
    techList.removeChild(techList.firstChild);
    // techList.removeChild(techList.lastChild);
    // techList.removeChild(techList.childNodes[4]);
}

var body = document.body;
function deleteData() {
    body.removeChild(body.lastElementChild);
}
