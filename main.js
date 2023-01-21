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

let passwordParameters = {
    count : false,
    characters : false
}
let strengthbar = document.getElementById("strengthbar");
let strengthbarText = document.getElementById("strengthbarText");

function passwordChecker()
{
    var password = document.getElementById("signUpPassword").value;
    var regArray = new Array();
    var flag = false;
      regArray.push("[A-Z]"); //Uppercase Alphabet.
      regArray.push("[a-z]"); //Lowercase Alphabet.
      regArray.push("[0-9]"); //Digit.
      regArray.push("[$@$!%*#?&]"); //Special Character.

      var checker = new Array();
      checker.push(1);
      checker.push(1);
      checker.push(1);
      checker.push(1);

      
      for(var i = 0; i < regArray.length; i++)
      {
        if(!(new RegExp(regex[i]).test(password))){
            checker[i] = 0;
            passwordParameters.characters = false;
        }
      }
      passwordParameters.count = (password.length < 12) ? true : false;
      if( (passwordParameters.count == true) && (passwordParameters.characters == true)  )
      {
        flag = true;
      }
      if(flag = true)
      {
        strengthbarText.textContent = "Password passes the requirements!";
      }
      else{
        strengthbarText.textContent = "Password should include ";
        if(checker[0] == 0)
      {
        strengthbarText.textContent = strengthbarText.textContent + "Uppercase letter, ";
      }
      if(checker[1] == 0)
      {
        strengthbarText.textContent = strengthbarText.textContent + "Lowercase letter, "
      }
      if(checker[2] == 0)
      {
        strengthbarText.textContent = strengthbarText.textContent + "Digit, ";
      }
      if(checker[3] == 0){
        strengthbarText.textContent = strengthbarText.textContent + "Special character!";
      }
      }
      
}
