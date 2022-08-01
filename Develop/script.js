// Assignment code here

function generatePassword() {
  // repeats prompt until valid input is entered
  while (true) {
  // ask user how long they would like password to be
    var length = window.prompt("How long would you like your password to be? Please enter a numerical value between 8 and 128.")
  // turns input into number
    var passwordLength = Number(length)
    console.log(passwordLength)
  
  // repeats prompt if input isn't between 8 and 128
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      window.alert("Please input a valid numerical value between 8 and 128.")
    }
    else {
      break
  }
}

// variables for what user would like in their password
var uppercase = window.confirm("Would you like to include uppercase letters in your password? Click 'OK' for yes or 'Cancel' for no.")
console.log(uppercase)
var lowercase = window.confirm("Would you like to include lowercase letters in your password? Click 'OK' for yes or 'Cancel' for no.")
console.log(lowercase)
var numbers = window.confirm("Would you like to include numbers in your password? Click 'OK' for yes or 'Cancel' for no.")
console.log(numbers)
var specials = window.confirm("Would you like to include specials in your password? Click 'OK' for yes or 'Cancel' for no.")
console.log(specials)

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




// pseudocode
// when clicking button, begin series of window prompts
// prompt 1 = user input for how long password is between 8-128 characters
// prompt 2 = ask for character types including lowercase, uppercase, numeric, and specials
// prompts should be validated for at least one selection
// store each answer using variables, then generate password
// display password in text box