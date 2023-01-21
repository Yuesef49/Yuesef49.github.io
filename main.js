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




let strengthbar = document.getElementById("strengthbar");

function passwordChecker(password)
{
    var count = false;
    var characters =true;
    
    var strengthbarText = document.getElementById("strengthbarText");

    if(password.length == 0)
    {
        strengthbarText.innerHTML = "Please enter the password";
        return;
    }

    var regArray = new Array();
    var flag = false;
      regArray.push("[A-Z]"); //Uppercase Alphabet.
      regArray.push("[a-z]"); //Lowercase Alphabet.
      regArray.push("[0-9]"); //Digit.
      regArray.push("[$@$!%*#?&]"); //Special Character.

      var checker = new Array();
      checker.push(0);
      checker.push(0);
      checker.push(0);
      checker.push(0);
 
      
      for(var i = 0; i < regArray.length; i++)
      {

        if(new RegExp(regArray[i]).test(password)){
            checker[i] = 1;

        }
      }
    if(checker.includes(0))
    {
        characters = false;
    }
      if(password.length >= 12)
      {
        count = true;

      }

      if((count == true) && (characters == true))
      {

        flag = true;

      }
      if(flag == true)
      {
        strengthbarText.innerHTML = "Password passes the requirements!";
      }
      else{
        strengthbarText.innerHTML = "Password should include: ";
        if(checker[0] == 0)
      {
        strengthbarText.innerHTML = strengthbarText.textContent + "Uppercase letter, ";
      }
      if(checker[1] == 0)
      {
        strengthbarText.innerHTML = strengthbarText.textContent + "Lowercase letter, "
      }
      if(checker[2] == 0)
      {
        strengthbarText.innerHTML = strengthbarText.textContent + "Digit, ";
      }
      if(checker[3] == 0){
        strengthbarText.innerHTML = strengthbarText.textContent + "Special character, ";
      }
      if(count == false)
      {
        strengthbarText.innerHTML = strengthbarText.textContent + "At least 12 characters";
      }
      }
      
}
