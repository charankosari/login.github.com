var attempt = 3; //ATTEMPTS 3
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "arthi" && password == "1689248"){
   let openpage = confirm('do you really want to open it,?')

window.location = "bin1.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

