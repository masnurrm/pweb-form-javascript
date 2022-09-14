var uname;
var email;
var pwd;
var cpwd;

function validateSignUp() {
    uname = document.fsignup.uname.value;
    email = document.fsignup.email.value;
    pwd = document.fsignup.pwd.value;
    cpwd = document.fsignup.cpwd.value;

    if(uname == " "){
        alert("Enter username");
        document.getElementById("uname").style.borderColor = "red";
        return false;
    }
    if(uname.length <= 5) {
        alert("Username should be more than 5 characters");
        return false;
    }
    else if(pwd == " ") {
        alert("Password must be entered");
        document.getElementById("pwd").style.borderColor = "green";
        return false;
    }
    else if(pwd.length < 6) {
        alert("Password should be atleast 6 characters");
        return false;
    }
    else if(pwd != cpwd) {
        alert("Confirm password must be same as password");
        return false;
    }
    else {
        alert("Berhasil membuat akun. Silahkan login");
        location.href = "./index.html";
        return true;
    }
}


function validateLogin() {
    email = document.flogin.email.value;
    pwd = document.flogin.pwd.value;

    if(email == " "){
        alert("Enter email");
        return false;
    }
    else if(pwd == " ") {
        alert("Password must be entered");
        return false;
    }
    else if(pwd.length < 6) {
        alert("Password should be atleast 6 characters");
        return false;
    }
    else {
        alert("Berhasil masuk");
        return true;
    }
  
}

function signUp() {
    location.href = "./signup.html";
}

function login() {
    location.href = "./index.html";
}