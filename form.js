function validate(event) {
    event.preventDefault();
    console.log(event);
    console.log("Form Validation");
    
    //1st Approch
    // var user = document.querySelector("#user");
    // var pwd = document.querySelector("#pwd");
    // console.log(user.value);
    // console.log(pwd.value);

    //2nd Approch
    // var form = document.forms("first");
    // var user = form("user");
    // var pwd = form("pwd");
    // console.log(user.value);
    // console.log(pwd.value);

    //3rd Approch

    var user = document.first.user.value;
    var pwd = document.first.pwd.value;
    console.log(user);
    console.log(pwd);
    var nameErr = document.querySelector("#userError");

    var namePattern = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;

    console.log(namePattern.test(user));
    if (!namePattern.test(user) || user.length<=3) {
        nameErr.innerHTML ="Please enter a valid username";
    }else{
        // nameErr.innerHTML = ""
        nameErr.style.display='none';
        document.first.submit();
    }
}