function getUserData(){
    var name = prompt("Enter User Name");
    if(name != null && name.length > 0){
        alert(`Welcome ${name}`);
        var age = prompt("Enter age");
        if (age < 18) {
            alert("You are not allowed");
            close();
        }else{
            open('http://google.com');
        }
    }else{
        alert("Name can not be empty")
        document.getElementById("btn").click();
    }
}