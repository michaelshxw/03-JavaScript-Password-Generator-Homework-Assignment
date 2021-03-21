// start

// user input variables
var passwordLength;
var confirmNumber;
var confirmCharacter;
var comfirmUpper;
var confirmLower;
//globally declared variables
var userSelection;

// start password variable values
// alphabetical characters
var fullAlphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
var alphabet = fullAlphabet.split (' ');
// convert letters to uppercase 
// reference "below code demonstrated: REFERENCE "
var upperCase = function(x) {
    return x.toUpperCase();
};
// create a variable to store the uppercase characters
var alphabetUppercase = alphabet.map(upperCase);
// numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// special characters
var character = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "=", "+", "~", ">", "<", "[", "]", "{", "}", "|"]

// get the generate button and assign it to variable generateBtn
var generateBtn = document.querySelector('#generate')
// add event listener to generateBtn
generateBtn.addEventListener("click", function() {
    // once clicked, run function generatePassword and insert text into target id="password"
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

// start function to generate password
function generatePassword() {
    
    //parseInt ensures the output is a number
    //reference: httpassword://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    var passwordLength = parseInt(prompt("Number of characters: (Min 8, Max 128)", "8")); 
    
    // first if statement
    if (!passwordLength) {
        //if its not a number, display an error alert
        alert("Error: This needs a number value")
    } else if (passwordLength < 8 || passwordLength > 128) {
        //if it doesn't fall between 8-128, display an error alert
        passwordLength = parseInt(prompt("Error: You must choose a number between 8-128"));
    } else {
        //otherwise, confirm which parameters the user would like to include
        confirmNumber = confirm("Would you like to include numbers?");
        confirmCharacter = confirm("Would you like to include symbols?");
        confirmUpper = confirm("Would you like to include uppercase characters?");
        confirmLower = confirm("Would you like to include lowercase characters?");
    };

    //if statements for user selections
    //4 negative selections
    if (!confirmNumber && !confirmCharacter && !confirmUpper && !confirmLower) {
        userSelection = alert("You must choose at least one character type!");
    }
    //4 positive selections
    else if (confirmNumber && confirmCharacter && confirmUpper && confirmLower) {
        userSelection = character.concat(number, alphabet, alphabetUppercase)
    }
    //3 positive selections
    else if (confirmNumber && confirmCharacter && confirmLower){
        userSelection = character.concat(number, alphabet)
    } else if (confirmNumber && confirmCharacter && confirmUpper){
        userSelection = character.concat(number, alphabetUppercase)
    } else if (confirmNumber && confirmUpper && confirmLower){
        userSelection = number.concat(alphabet, alphabetUppercase)
    } else if (confirmCharacter && confirmUpper && confirmLower){
        userSelection = character.concat(alphabet, alphabetUppercase)
    }
    //2 positive selections
    else if (confirmNumber && confirmCharacter){
        userSelection = number.concat(character)
    } else if (confirmNumber && confirmUpper){
        userSelection = number.concat(alphabetUppercase)
    } else if (confirmNumber && confirmLower){
        userSelection = number.concat(alphabet)
    } else if (confirmCharacter && confirmUpper){
        userSelection = character.concat(alphabetUppercase)
    } else if (confirmCharacter && confirmLower){
        userSelection = character.concat(alphabet)
    } else if (confirmUpper && confirmLower){
        userSelection = alphabet.concat(alphabetUppercase);
    }
    //1 positive selection
    else if (confirmNumber) {
        userSelection = number;
    } else if (confirmCharacter) {
        userSelection = character;
    } else if (confirmLower) {
        userSelection = alphabet
    } else if (confirmUpper) {
        userSelection = alphabetUppercase;
    }

    else if (confirmUpper) {
        userSelection = space.concat(alphabetUppercase);
    }


    //empty array to store password
    var finalPassword = [""];

    //randomly select characters based on userSelection
    for (var i = 0; i < passwordLength; i++) {
    var randomPassword = userSelection[Math.floor(Math.random() * userSelection.length)];
    finalPassword.push(randomPassword);
    }

    var password = finalPassword.join('');
    userInput(password);
    return password;
    
}

function userInput(password) {
    document.getElementById("password").textContent = password;
}