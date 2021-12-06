let arr = ["kiran","m","G",10000,{}];
let [fn,mn, ,ln,other ="ntg"] = arr;
console.log(fn);
console.log(ln);
console.log(other);

console.log(arr);
let arr2 =[1,2,3,4,4,55,65,6,6,7,7,8,8,99,];
let[a,b,c, ...d]=arr2;

console.log(a,b,c);
console.log(d);

// object destrucutred 

var human = {
    name:"Naveen",
    gender:"Male",
    weight:58,
    height:5.7,
    hobbies:["Playing cricket" , "watching naruto"],
    role:"Developer"
};

let {name:user, weight , height , role:desig="Develop", hobbies} = human;
console.log(user);
console.log(weight);
console.log(height);
console.log(desig);

console.log("----------------");

let{name:user1 , ...otherInfo}= human;
console.log(user1);
console.log(otherInfo);