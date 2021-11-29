//Takes user input and returns length and characterOptions
function generateCriteria() {
  do {
    var lengthConfirm = window.prompt("Enter a length for your password within the range of 8-128");
  }
  while (lengthConfirm < 8 || lengthConfirm > 128 || lengthConfirm === null || isNaN(lengthConfirm));

  //variable arrays for possible password characters
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", "<", ".", ">", "/", "?", ";", ":"];
  //variable array for chosen characters
  var characterOptions = [];

  //prompts for password character options
  //if statements add the respective character array into the characterOptions array based on user input
  alert("The following prompts will decide what character types to include in your password. You will have the option to press OK to include the character type or cancel to skip it")
  var upperCaseConfirm = window.confirm("Include upper case letters?");
    if (upperCaseConfirm === true) {
      alert("Stellar choice. Upper case letters will be added to your password")
      characterOptions.push(...upperCaseLetters);
      console.log(characterOptions);
    }
  var lowerCaseConfirm = window.confirm("Include lower case letters?");
    if (lowerCaseConfirm === true) {
      alert("Wonderful. Lower case letters will be added to your password")
      characterOptions.push(...lowerCaseLetters);
      console.log(characterOptions);
    }
  var numbersConfirm = window.confirm("Include number values?");
    if (numbersConfirm === true) {
      alert("Fantastic. Numbers will be added to your password")
    characterOptions.push(...numbers);
    console.log(characterOptions);
    }
  var specialCharactersConfirm = window.confirm("Include special characters?");
    if (specialCharactersConfirm === true) {
      alert("Marvelous. Special characters will be added to your password")
    characterOptions.push(...specialCharacters);
    console.log(characterOptions);
    }
    if (characterOptions === []); {
      alert("A password cannot be generated without any characters. Please refresh your browser and try again.");
    }
      var criteria = {
      length: lengthConfirm,
      characterOptions: characterOptions
      } 
    return criteria;
  }

//creates random password based on criteria recieved from generateCriteria function
function generatePassword() {
  var criteria = generateCriteria();
  let length = criteria.length;
  let characterOptions = criteria.characterOptions;
  var password = '';
  
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random()*characterOptions.length);
    password += characterOptions[random];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);