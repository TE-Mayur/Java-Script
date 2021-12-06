//Named Functions

function first(){
    console.log("This is named function");
}
first();

function second(a,b){
    console.log(a+b);
    return a+b;
}

var res = second(10,20);
console.log(res);
//-----------------------------------------------------------------
// Function Expression & Anonomous

console.log("funtion Expression");

var greet = function(name){
    console.log("Good Afternoon",name);
    return "bye";
}
var output = greet("Paul");
console.log(output);

//--------------------------------------------------------------
//Imediately Invoked Function Expression

(function(name){
    console.log(name);
    console.log("Inside the IIEF")
})("ABC");

//--------------------------------------------------------------
//Arrow Function

console.log("Arrow Function");  

var arrFunction = (input)=>{
    console.log(input);
    console.log("This is Arrow Function");
    return 0;
}

console.log(arrFunction("Arr"));