// Assignment code here

// sets of values for the for loop to choose from
const lowerCharSet = "abcdefghijklmnopqrstuvwxyz"
const upperCharSet = lowerCharSet.toUpperCase()
const specialChars = "~!@#$%^&*()_+="
const numChars = "1234567890"

function generatePassword() {

  let passLength = prompt("Enter the length of your password.");
  passLength = parseInt(passLength);

// if the response is not a number, display error message and return
  if (isNaN(passLength) || (passLength < 8) || passLength > 128) {
    alert("Please enter a number between 8 and 128!");
    return;
  }

  let special = confirm("Would you like to include special characters?");

  let upperCase = confirm("Would you like to include uppercase characters?");

  let lowerCase = confirm("Would you like to include lowercase letters?");

  let numericChar = confirm("Would you like to include numbers?");

  // if all prompts are NOT true (user cancels all prompts) display below error and return
  if (!special && !upperCase && !lowerCase && !numericChar) {
    alert("Please choose at least one character type to generate a password!")
    return;
  }

  let password = ""
  let charSet = ""

  // if prompts are true, add random character from constants to the empty string

  if (special) {
    charSet += specialChars
  }

  if (upperCase) {
    charSet += upperCharSet
  }

  if (lowerCase) {
    charSet += lowerCharSet
  }

  if (numericChar) {
    charSet += numChars
  }

// as long as i is below the user-specified password length, add random character from random index and
// add it to the empty string: password
  for (let i = 0; i < passLength; i++) {
    let index = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(index);
  }

  // changes from CAN include to WILL include special chars if the user confirms the prompt

  // if (special) {
  //   let passwordIndex = Math.floor(Math.random() * password.length);
  //   let indexSpecialChars = Math.floor(Math.random() * specialChars.length);
  //   password = password.split("")
  //   password[passwordIndex] = specialChars.charAt(indexSpecialChars)
  //   password = password.join()
  // }

  return password;

}


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
