// Assignment code here
var lengthPrompt = function() {
  do {
  var lengthInput = window.prompt("Enter a number for password length. Minimum 8 characters/maximum 128 characters."); }
  while (lengthInput < 8 || lengthInput > 128 || !lengthInput || isNaN(lengthInput)); {
  }
    return lengthInput;
  };

console.log(lengthPrompt());

var upperCasePrompt = function() {
    var upperCase = window.confirm("Include capital letters?"); 
    return upperCase;
  };

console.log(upperCasePrompt());

var lowerCasePrompt = function() {
  var lowerCase = window.confirm("Include lower case letters?");
  return lowerCase;
}

console.log(lowerCasePrompt());

var numericPrompt = function() {
  var numerics = window.confirm("Include numeric values?");
  return numerics;
}


console.log(numericPrompt());

var specialCharactersPrompt = function() {
  var specialCharacter = window.confirm("Include special characters?");
  return specialCharacter;
}

console.log(specialCharactersPrompt());

var lowerCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", "<", ".", ">", "/", "?", ";", ":", "[", "]", "{", "}"];

var megaArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", "<", ".", ">", "/", "?", ";", ":", "[", "]", "{", "}"];

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
