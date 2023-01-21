function passwordRequirement()
{

    var elementPassword = document.getElementById("signUpPassword").value;
    var elementUsername = document.getElementById("signUpUsername").value;

 

    if((elementUsername.length < 5) || (elementUsername.length > 12)){

            alert("Username length must be at least 5 at most 12 characters");
            return false; 
    }


    alert("function works2");
    return true;
}

