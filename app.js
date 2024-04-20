function hideLoader(){
    $('.loader-wrapper').fadeOut(1800)
}

function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("confirm-password").value;
    console.log(password, cnfrmPassword);

    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords Match";
            message.style.backgroundColor = "#3ae374";
        }else{
            message.textContent = "Passwords Don't Match";
            message.style.backgroundColor = "#ff4d4d";
        }
    }else{
        alert("Password can't be empty!");
    }
}