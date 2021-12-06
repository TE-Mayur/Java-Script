function getData(ref){
    // console.log(ref);
    console.log(ref(10));
}

function display(){
    console.log("Call back function");
    return 1000000;
}

getData(display);

getData((a)=>{
    console.log("This is a arrow function as callback",a);
    // return 2000;
})

getData(function(b){
    console.log("This is Function Expression as callback",b);
})