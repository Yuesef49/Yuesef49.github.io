function submitChecker()
{
  alert("Submition is done, informations: " + "\n" +
  "Username: " + document.getElementById("signUpUsername").value + "\n" +
  "Password: " + document.getElementById("signUpPassword").value + "\n" +
  "Name: " + document.getElementById("signUpName").value + "\n" +
  "Country: " + document.getElementById("signUpCountry").value + "\n" +
  "ZipCode: " + document.getElementById("signUpZipcode").value + "\n" +
  "Email: " + document.getElementById("signUpEmail").value + "\n" +
  "Language: " + document.getElementById("signUpLanguage").value);

  usernameChecker(document.getElementById("signUpUsername").value); 
  passwordChecker(document.getElementById("signUpPassword").value); 
  fullnameChecker(document.getElementById("signUpName").value);
  countryChecker(document.getElementById("signUpCountry").value); 
  zipcodeChecker(document.getElementById("signUpZipcode").value); 
  emailChecker(document.getElementById("signUpEmail").value); 
  languageCheck(document.getElementById("signUpLanguage").value);
  genderCheck();

  if(usernameChecker(document.getElementById("signUpUsername").value) 
  &&  passwordChecker(document.getElementById("signUpPassword").value) 
  && fullnameChecker(document.getElementById("signUpName").value)
  && countryChecker(document.getElementById("signUpCountry").value) 
  && zipcodeChecker(document.getElementById("signUpZipcode").value) 
  && emailChecker(document.getElementById("signUpEmail").value) 
  && languageCheck(document.getElementById("signUpLanguage").value)
  && genderCheck())
  {
    
    
    return true;
  }
  else{
    alert("You didn't fill the required fields properly!!");
    return false;
  }
}

function usernameChecker(username)
{
  var usernameBar = document.getElementById("usernameBar");

    var usernameText = document.getElementById("usernameBarText");

    if(username.length == 0)
    {
        usernameBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
        usernameText.innerHTML = "Username cannot be empty";
        return false;
    }

    var firstLetter = !username.charAt(0).match("[A-Z]");
    var counter = (username.length < 5) || (username.length > 12);
    var lastLetter = !username.charAt(username.length-1).match("[0-9]");
    
    var lastLetter = !username.charAt(username.length-1).match("[$@$!%*#?&]") && lastLetter;
    if(firstLetter || counter || lastLetter) 
    {
      usernameBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
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
        usernameBar.style.backgroundColor= "rgb(170, 255, 128)";
        usernameText.innerHTML = "Username meets the requirements";
        return true;
    }
    return false;
    
}



function fullnameChecker(fullname)
{
    var nameText = document.getElementById("nameBarText");
    var nameBar = document.getElementById("nameBar");
    if(fullname.length == 0)
    {
        nameBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
        nameText.innerHTML = "Name cannot be empty!";
        return false;
    }

    var nameCheck = !fullname.match("[^A-Z^a-z^ ]");
    if(nameCheck)
    {
        nameBar.style.backgroundColor= "rgb(170, 255, 128)";
        nameText.innerHTML = "Name meets the requirements!";
        return true;
    }
    else if(!nameCheck)
    {
        nameBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
        nameText.innerHTML = "Name  must contain the alphabet only!";
        return false;
    }
}





function passwordChecker(password)
{
    var count = false;
    var characters =true;
    
    var strengthbarText = document.getElementById("strengthbarText");
    var passwordBar = document.getElementById("strengthbar");
    if(password.length == 0)
    {
        passwordBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
        strengthbarText.innerHTML = "Password cannot be empty";
        return false;
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
        passwordBar.style.backgroundColor= "rgb(170, 255, 128)";
        strengthbarText.innerHTML = strengthbarText.textContent + ". Better password!";
        return true;
      }
      else
      {
        passwordBar.style.backgroundColor= "rgb(0, 179, 0)";
        strengthbarText.innerHTML = strengthbarText.textContent + ". Good password!";
        return true;
      }
      }
      else{
        passwordBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
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

function countryChecker(country)
{
  var countryBarText = document.getElementById("countryBarText");
  var countryBar = document.getElementById("countryBar");
  if(country.length == 0)
  {
    countryBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
    countryBarText.innerHTML = "Country cannot be empty";
    return false;
    
  }
  else{
    countryBar.style.backgroundColor= "rgb(170, 255, 128)";
    countryBarText.innerHTML = "Correct input!";
    return true;
  }

}

function zipcodeChecker(zipcode)
{
  var zipcheck = !zipcode.slice(0,3).match("[^A-Z^a-z^ ]");
  var zipcheck2 = !zipcode.slice(4,5).match("[^0-9]");
  var zipcodeText = document.getElementById("zipcodeBarText");
  var counterCheck = zipcode.length == 6 ? true : false;
  var zipcodeBar = document.getElementById("zipcodeBar");

  if(zipcode.length == 0)
  {
    zipcodeBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
    zipcodeText.innerHTML = "Zipcode cannot be empty!";
    return false;
  }
  
  if(!zipcheck && !zipcheck2 && counterCheck)
  {
    zipcodeBar.style.backgroundColor= "rgb(170, 255, 128)";
    zipcodeText.innerHTML = "Correct/Valid form of input!";
    return true;
  }
  else{
    zipcodeBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
    zipcodeText.innerHTML = "InCorrect/InValid form of input! Correct Form: 1234AD";
    return false;
  }
}

function emailChecker(email)
{
  var emailText = document.getElementById("emailBarText");
  var emailBar = document.getElementById("emailBar");
  if(email.length == 0)
  {
    emailBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
    emailText.innerHTML = "Email cannot be empty!";
    return false;
  }
  else if(email.indexOf("@") == -1)
  {
    emailBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
    emailText.innerHTML = "Email input is not in a proper format!";
    return false;
  }
  else if(email.indexOf("@") == 0)
  {
    emailBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
    emailText.innerHTML = "Email input is not in a proper format!";
    return false;
  }
  else if(email.indexOf("@") != email.lastIndexOf("@"))
  {
    emailBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
    emailText.innerHTML = "Email input is not in a proper format!";
    return false;
  }
  else if(email.match(" ") != null)
  {
    emailBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
    emailText.innerHTML = "Email input is not in a proper format!";
    return false;
  }
  else if(email.match(".com") == null)
  {
    emailBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
    emailText.innerHTML = "Email input is not in a proper format!";
    return false;
  }
  else{
    emailBar.style.backgroundColor= "rgb(170, 255, 128)";
    emailText.innerHTML = "Correct/Valid form of input!";
    return true;
  }

}

function languageCheck(language)
{
  var languageText = document.getElementById("languageBarText");
  var languageBar = document.getElementById("languageBar");

  if(language.length == 0)
  {
    languageBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
    languageText.innerHTML = "Language cannot be empty!";
    return false;
  }
  else{
    languageBar.style.backgroundColor= "rgb(170, 255, 128)";
    languageText.innerHTML = "Correct form of input!";
    return true;
  }

}

function genderCheck()
{
  var radios = document.getElementsByName('Gender');
  var genderText = document.getElementById("genderBarText");
  var genderBar = document.getElementById("genderBar");
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          genderText.innerHTML = "Thanks for selection!";
          genderBar.style.backgroundColor= "rgb(170, 255, 128)";
          return true;    
      }

  }
  genderText.innerHTML = "You should select a gender!";
  genderBar.style.backgroundColor= "rgba(255, 128, 128, 1)";
  return false;
}