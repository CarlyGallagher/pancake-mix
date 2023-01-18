// Assignment Code

var generateBtn = document.querySelector("#generate");



// variables for password characters, number and letters***
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
var specialcharacters = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '?',
  '.', '_', '-', '=', '+', '^', '<', '>', ';', ':', '~',];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var capitalletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

var characters = [];


function characterlist() {
  characters = [];
  if (confirm('Include lowercase letters?')) {
    characters = characters.concat(lowercase);
  }
  if (confirm('Include capital letters?')) {
    characters = characters.concat(capitalletters);
  }
  if (confirm('Include specialcharacters?')) {
    characters = characters.concat(specialcharacters);
  }
  if (confirm('Include numbers?')) {
    characters = characters.concat(numbers);
  }
}

function generatePassword() {
  var passlength = prompt(
    'I choose a length of at least 8 characters and no more than 128 characters'
  );
  if (passlength >= 8 && passlength <= 128) {
    characterlist();
    randomPass(passlength);
    alert('password is succesful!');
  }
  else {
    alert('Password needs to be between 8 and 128 characters');
  }
  return retVal;

}

function randomPass(passlength) {
  retVal = '';
  for (var i = 0; i < passlength; i++) {
    retVal += characters[Math.floor(Math.random() * characters.length)]
  }
  return retVal;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);