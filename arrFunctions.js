var numbers = [11,22,33,44,55,66,77,88,99,33,65,76];

//includes(searchElement , [fromIndex])

console.log(numbers.includes(11,4));

//push(element/elements)
console.log(numbers , numbers.length , "org");
var newLength = numbers.push(100)

//var newLength = number.push(1000,12,32,545)
console.log(numbers, newLength , "after push");

//pop()
console.log(numbers , "before pop");
console.log(numbers.pop);
console.log(numbers , "after pop");

console.log("-------unshift----------");
//unshift(element/elements)
console.log(numbers , "before unshift" , numbers.length);
// var newLength = numbers.unshift(150);
var nwLength = numbers.unshift(150,160,180);
console.log(numbers , "after unshift" , nwLength);

console.log("-------shift----------");
console.log(numbers, "Before shift");
console.log(numbers.shift());
console.log(numbers, "after shift");

console.log("-------indexof----------");
console.log(numbers);
console.log(numbers.indexOf(11));//2
console.log(numbers.indexOf(11,3)); //-1

console.log("-------splice----------");
console.log(numbers);
var res = numbers.splice(3,4,565,67,56,78,4656,43);
console.log(res);
console.log("org" ,numbers);

console.log("----------slice----------");
console.log(numbers);
var op = numbers.slice(5,8)
console.log(op);
console.log("after slice",numbers);


var arr = [1,2,3,4,5,6,8];
console.log("org" , arr);
var modified = arr.map(
    (data)=>{
        return data*2;
    
    }
)

console.log(modified);
console.log("after map", arr);

console.log("------------------filter------------");
var arr1 = [1,33,4,5,6,6,7,7,8];
console.log(arr1 , "before");
var filtered = arr1.filter(
    data=>data%2!=0
)

console.log(filtered);
console.log(arr1 , "after");

var arr2 =[14,5,45,6,6,536,56,75]
arr2["nn"] = "Naveen"
arr2.forEach((data ,index)=>{
    console.log(data ,index);
})