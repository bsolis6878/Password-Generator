// Assignment code here
var requirements = {
  length: 10,
  lowercase: false,
  uppercase: true,
  numeric: false,
  specials: true
}

function beginPrompt() {
  // initial password length prompt
  var lengthPrompt = window.prompt("How long would you like your password to be? Please enter a numerical value between 8 and 128.");

  // checks for valid input, otherwise restarts
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    window.alert("Please enter a valid numerical value between 8 and 128.");
    beginPrompt();
  }
  // sets requirement object to user input
  requirements.length = lengthPrompt;
  console.log(requirements.length);

  var lowercasePrompt = window.prompt("Would you like to include lowercase letters? Reply 'yes' or 'no'.");
  while (lowercasePrompt !== "yes" || lowercasePrompt !== "no") {
    window.alert("Please enter a valid response.");
    var lowercasePrompt = window.prompt("Would you like to include lowercase letters? Reply 'yes' or 'no'.");
    console.log(lowercasePrompt);
  }
  lowercasePrompt = lowercasePrompt.toLowerCase();
  if (lowercasePrompt === "yes") {
    lowercasePrompt = true;
  }
  else if (lowercasePrompt === "no") {
    lowercasePrompt = false;
  }
  requirements.lowercase = lowercasePrompt;
  console.log(requirements.lowercase);

  var uppercasePrompt = window.prompt("Would you like to include uppercase letters? Reply 'yes' or 'no'.");
  requirements.uppercase = uppercasePrompt;
  console.log(requirements.uppercase);

  var numericPrompt = window.prompt("Would you like to include numeric characters? Reply 'yes' or 'no'.");
  requirements.numeric = numericPrompt;
  console.log(requirements.numeric);

  var specialsPrompt = window.prompt("Would you like to include special characters? Reply 'yes' or 'no'.");
  requirements.specials = specialsPrompt;
  console.log(requirements.specials);

  document.getElementById('password').textContent = requirements.length;
}

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




// pseudocode
// when clicking button, begin series of window prompts
// prompt 1 = user input for how long password is between 8-128 characters
// prompt 2 = ask for character types including lowercase, uppercase, numeric, and specials
// prompts should be validated for at least one selection
// store each answer using variables, then generate password
// display password in text box