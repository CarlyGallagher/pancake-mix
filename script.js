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

var arrays = [];

function type () {
  if (confirm('Include numbers ?')) {
    arrays = arrays.concat(numbers);

  }
}

function type () {
  if (confirm('Include specialcharacters ?')) {
    arrays = arrays.concat(specialcharacters);

  }
}

function type () {
  if (confirm('Include lowercase letters ?')) {
    arrays = arrays.concat(lowercase);

  }
}

function type () {
  if (confirm('Include capital letters ?')) {
    arrays = arrays.concat(capitalletters);

  }
}

function passgen() {
  var passlength = prompt(
    'I choose a length of at least 8 characters and no more than 128 characters'
  );
  if (passlength >= 8 && passwordlength <= 128) {

  }
  
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
