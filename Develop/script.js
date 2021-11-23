// Assignment code here
var lengthPrompt = function() {
  var lengthInput = window.prompt("Enter a number for password length. Minimum 8 characters/maximum 128 characters.");
  if (lengthInput < 8 || lengthInput > 128);
    window.alert("Length needs to be between 8-128 characters. Try again");
    return lengthPrompt();
}

lengthPrompt();


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
