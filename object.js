var human = {
    name:"Naveen",
    gender:"Male",
    weight:58,
    height:5.7,
    hobbies:["Playing cricket" , "watching naruto"],
    isMarried:true,
    hasChildren:undefined,
    dob:new Date(),
    address:{
        houseNo:"#420",
        city:"Rameshwaram"
    },
    playing:function(){
        console.log(this.name , "is playing");
    },
    watching:()=>{
        console.log(human.name , "watches naruto");
    }
}


console.log(human);

var data = new Object();
data.fname="Muthu",
data.address={},
data.address.city="Chennai"

console.log(data);
