function usernameChecker(username)
{

    var usernameText = document.getElementById("usernameBarText");

    if(username.length == 0)
    {
        usernameText.innerHTML = "Please enter your username";
        return;
    }

    var firstLetter = !username.charAt(0).match("[A-Z]");
    var counter = (username.length < 5) || (username.length > 12);
    var lastLetter = !username.charAt(username.length-1).match("[0-9]");
    
    var lastLetter = !username.charAt(username.length-1).match("[$@$!%*#?&]") && lastLetter;
    if(firstLetter || counter || lastLetter) 
    {
        usernameText.innerHTML = "Username should: ";
        if(firstLetter)
    {
        usernameText.innerHTML = usernameText.textContent + "start with an Uppercase, ";
    }
    if(counter){

        usernameText.innerHTML = usernameText.textContent + "it's length should be 5-12, ";
    }
    if(lastLetter)
    {
        usernameText.innerHTML = usernameText.textContent + "end with number/special character";
    }
    }
    else{
        usernameText.innerHTML = "Username meets the requirements";
    }
    
}

+function fullnameChecker(fullname)
{
    var nameText = document.getElementById("nameBarText");
    if(fullname.length == 0)
    {
        nameText.innerHTML = "Please enter your name";
        return;
    }

    var nameCheck = !fullname.match("[^A-Z^a-z^ ]");
    if(nameCheck)
    {
        nameText.innerHTML = "Name meets the requirements!";
    }
    else if(!nameCheck)
    {
        nameText.innerHTML = "Name  must contain the alphabet only!";
    }
}

function fullnameChecker(fullname)
{
    var nameText = document.getElementById("nameBarText");
    if(fullname.length == 0)
    {
        nameText.innerHTML = "Please enter your name";
        return;
    }

    var nameCheck = !fullname.match("[^A-Z^a-z^ ]");
    if(nameCheck)
    {
        nameText.innerHTML = "Name meets the requirements!";
    }
    else if(!nameCheck)
    {
        nameText.innerHTML = "Name  must contain the alphabet only!";
    }
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
        if(password.length >= 14)
      {
        strengthbarText.innerHTML = strengthbarText.textContent + ". Good password!";
      }
      else
      {
        strengthbarText.innerHTML = strengthbarText.textContent + ". Better password!";
      }
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
        return false;
      }
      
}
