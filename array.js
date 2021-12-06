var arr = [1,12,3,4,45,5,"str2",'str3',null,true];
console.log(arr);
arr[15] = "new";
console.log(arr);

//--------------------------------------------------------

var arr2 = new Array();
console.log(arr2); //empty

for(var i = 0; i < 11;i++){
    arr2[i] =i;
}

console.log(arr2); //length 11
//------------------------------------------------------------

var arr3 = new Array(1,2,3);
console.log(arr3);