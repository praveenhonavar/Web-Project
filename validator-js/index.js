function validate(){
    var pass = document.getElementById("password").value;

    var valid = document.getElementById("valid");
    var invalid= document.getElementById("invalid");


    if(pass===""){
        // console.log('epfeplf');
        invalid.innerText = "!Please enter password.";
    }
    
    if(pass !== ""){
        if( (pass.length >= 8) && (pass.length <=50) && pass.match(/[A-Z]/g)
        && pass.match(/[a-z]/g) && pass.match(/[0-9]/g) && pass.match(/[^a-zA-Z\d]/g)){
            // console.log('soooo');
            invalid.innerText=" ";
            valid.innerText = "Congratulations! password is valid.";
        }
        else{
            // console.log("poooooo");
            //  var inval= document.getElementById("invalid");
            valid.innerText=" ";
            invalid.innerText = "!Password length must between (8-50) and must contains one uppercase letter, one lowercase letter, one digit and one symbol.";
        }
    }
}