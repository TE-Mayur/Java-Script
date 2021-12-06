//create a element and append to body
var pTag = document.createElement('p');
// pTag.innerHTML = "<h1>Welcome to Chennai</h1>";
pTag.innerText="Welcome to TamilNadu";
// pTag.textContent="Welcome to Chennai";
document.body.appendChild(pTag);
console.log(pTag);

var titleTag = document.createElement('title')
titleTag.innerText = "JS | DOM"
document.head.appendChild(titleTag);

var link = document.createElement('a');
link.innerText ="LinkedIN"; 
link.href ="https://linkedin.com"
link.style.color="red"
link.style.textDecoration ="none"
link.style.fontSize = "25px"
link.style.margin = "200px"
link.style.border ="2px solid blue"
link.style.padding = "8px"
link.id="test"
link.name="test"


document.body.appendChild(link);
console.log(link);

var btn = document.getElementById("btn");
btn.addEventListener("click", createNewEle);
btn.addEventListener("mouseover" , enLarge);
btn.addEventListener("mouseout", ()=>{
    btn.style.fontSize="20px";
});

var pTag = document.createElement("p");
pTag.innerHTML = "<h1>THis is coming from event</h1>"
function createNewEle(){
    document.body.appendChild(pTag);
    console.log(pTag);
}

function enLarge() {
    btn.style.fontSize="30px"
}

// var para = document.getElementById("para")
// para.addEventListener("mouseover", changePara)
// para.addEventListener("mouseout", normalPara)

// function changePara() {
//     para.style.
//     para.innerText("hi this is a building")
// }


