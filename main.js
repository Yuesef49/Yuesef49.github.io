function passwordRequirement()
{
    var elementPassword = document.getElementById("signUpPassword").value;
    var elementUsername = document.getElementById("singUpUsername").value;

    if(elementPassword == "" && elementUsername == "")
    {
        alert("Password cannot be empty!\nUsername cannot be empty")
        return false; 
    }

        if(elementUsername.length < 5 || elementUsername.length > 12){
            alert("Username length must be atleast 5 at most 12 characters");
            return false; 
        }

    if(elementPassword.length < 8){
        alert("**Password length must be atleast 8 characters");
        return false; 
    }
    alert("function works")
    return true;
}