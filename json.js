var human = {
    name:"Naveen",
    gender:"Male",
    weight:58,
    height:5.7,
    hobbies:["Playing cricket" , "watching naruto"],
    isMarried:true,
    hasChildren:undefined,
    dob:new Date().toDateString(),
}

console.log("JS Object -" ,human);

var humanJson = JSON.stringify(human);

console.log("JSON Object -" , humanJson);

var jsob = JSON.parse(humanJson);

localStorage.setItem("user" , humanJson); // insert data

var data = localStorage.getItem("user"); // get the data
console.log(JSON.parse(data));

// localStorage.clear(); // clear the localStorage
console.log(localStorage.key(0)); // feteches the key at that index in the form 
localStorage.removeItem("data");
console.log(localStorage.length);

sessionStorage.setItem("user", humanJson);