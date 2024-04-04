

function registor(){ 
    var name= document.getElementById("user").value;
    var email= document.getElementById("email").value;
    var pass= document.getElementById("pass").value;
    var confirm= document.getElementById("confirm").value;
    var message= document.getElementById("message");
    message.setAttribute("class","square");
if(name=="" && email=="" && pass=="" && confirm==""){
    message.innerHTML="Enter your data";
    return false;
}else if(name.length<5 || name.length>15) {
    message.innerHTML="Enter between 5&15 character in name";
    return false;
}else if (email.indexOf("@",3)==-1){
    message.innerHTML="Enter valid email";
    return false;
}else if (pass.length<8){
    message.innerHTML="Enter atleast 8 character in password";
    return false;
}else if (pass != confirm){
    message.innerHTML="Enter matching password ";
    return false;
}

}