

//variable arrays for possible password content
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", "<", ".", ">", "/", "?", ";", ":"];

//variables for confirm prompts of password criteria
var lengthConfirm;
var upperCaseConfirm;
var lowerCaseConfirm;
var numbersConfirm;
var specialCharactersConfirm;
var random;
var pass = "";


//password possibility variable
var characterOptions = [];

//Criteria function start
function generateCriteria() {
  do {
    lengthConfirm = window.prompt("Enter a number for password length. Minimum 8 characters/maximum 128 characters.");
  }
  while (lengthConfirm < 8 || lengthConfirm > 128 || lengthConfirm === null || isNaN(lengthConfirm));
  
  var upperCaseConfirm = window.confirm("Include capital letters?");
    if (upperCaseConfirm === true) {
      characterOptions.push(...upperCaseLetters);
      console.log(characterOptions);
    }
  var lowerCaseConfirm = window.confirm("Include lower case letters?");
    if (lowerCaseConfirm === true) {
      characterOptions.push(...lowerCaseLetters);
      console.log(characterOptions);
  }
  var numbersConfirm = window.confirm("Include numeric values?");
    if (numbersConfirm === true) {
    characterOptions.push(...numbers);
    console.log(characterOptions);
}
  var specialCharactersConfirm = window.confirm("Include special characters?");
    if (specialCharactersConfirm === true) {
    characterOptions.push(...specialCharacters);
    console.log(characterOptions);
  
  var criteria = {
      length: lengthConfirm,
      characterOptions: characterOptions

  }  
  console.log(criteria);

  return criteria;
}

}

//creates random password based on criteria for length and characterOptions 
function generatePassword(criteria) {
  var criteria = generateCriteria();
  for (var i = 0; i < criteria.length; i++) {
    var random = Math.floor(Math.random()*characterOptions.length);
    console.log(random);
    pass += characterOptions[random];
    console.log(pass);
  }
}
generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generateCriteria);

