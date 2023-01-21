function passwordRequirement()
{
    var element = document.getElementById("signUpPassword").value;

    if(element = "")
    {
        alert("Password cannot be empty!")
        return false; }

    if(element.length < 8){
        alert("**Password length must be atleast 8 characters");
        return false; }
        

       
}