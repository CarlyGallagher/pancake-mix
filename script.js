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

var lists = [];

var password = '';

function characterlist() {
  if (confirm('Include lowercase letters?')) {
    lists = lists.concat(lowercase);
  }
  if (confirm('Include capital letters?')) {
    lists = lists.concat(capitalletters);
  }
  if (confirm('Include specialcharacters?')) {
    lists = lists.concat(specialcharacters);
  }
  if (confirm('Include numbers?')) {
    lists = lists.concat(numbers);
  }
}

function generatePassword() {
  var passlength = prompt(
    'I choose a length of at least 8 characters and no more than 128 characters'
  );
  if (passlength >= 8 && passwordlength <= 128) {
    type()
  }
  else {
    alert('Password needs to be between 8 and 128 characters');
  }
}

function random () {
for (var i = 0; i < passlength; i ++) {
  password += lists[Math.floor(math.random() * lists.length)]
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
