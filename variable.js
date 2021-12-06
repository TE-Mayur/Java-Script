// let variable
let brand;
brand = "Apple";
console.log("  GLobal Scope :" , brand); // Apple

function printData() {
    let brand = "Nike";
    console.log("Function Scope :", brand); //Nike
}
printData();

if (true) {
    let brand = "Puma";
    console.log("Block Scope :", brand); //Puma
}

console.log("Global scope :", brand); //Apple

console.log("=================================");

//const variable
const tech = "HTML";
console.log("  GLobal Scope :" , tech); // HTML

function printData() {
    const tech = "CSS";
    console.log("Function Scope :", tech); //CSS
}
printData();

if (true) {
    const tech = "JS";
    console.log("Block Scope :", tech); //JS
}

console.log("Global scope :", tech); //HTML
