// ------------------
// for()

var arr = [1, 3, 23, 5, 45, 6];
arr["x"] = 100;
console.log(arr);

var obj = {
    name: "abc",
    age: 19
}

//-----------------------
// for-of

for (var data of arr) {
    if (data === 7) {
        continue;   // both continue and break
    }
    console.log(data);
}

//----------------
//for-in
  
var arr = [, 23, 43, 54, 65, 76];
arr["name"] = 100
for (var x in arr) {
    if (x == 2) {
        continue;  //both continue and break
    }
    console.log(arr[x]);
}

for (var key in obj) {
    console.log(typeof key);
    console.log(obj[key]);
}