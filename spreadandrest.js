//... Spread Operator
let arr1 = [1,2,34,4,5,5,6,67,7,8,9];
let arr2 =[10,11,12,32, ...arr1]
console.log(arr2);

let data ={
    name :"kiran",
    age : 14
}

console.log(data);

let duplicateData = {
    ...data,
    salary : 0
}

console.log(duplicateData);

// ... rest opertator
function add(...numbers){
    let sum = 0;
    for (let i of numbers) {
        sum = sum + i;
    }
    console.log(sum);
}

add();
add(1,2,3,4,45,5);
add(352,65,6,76,7,87854);