console.log("====App started=====");
function first(){
    setTimeout(()=> {
        console.log("First Executed");
    },0);
}

function second(){
    setTimeout(()=> {
        console.log("Second Executed");
    },0);
}

console.log("======App Ended=======");
first();
second();

