// start
// user input variables
var passwordLength;
var confirmNumber;
var confirmCharacter;
var comfirmUpper;
var confirmLower;
// start password variable values
// alphabetical characters
alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
alpha = alphabet.split (' ');
// convert letters to uppercase 
// reference "below code demonstrated: "
var upperCase = function(x) {
    return x.toUpperCase();
};
// create a variable to store the uppercase characters
alphaUppercase = alpha.map(upperCase);
// numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// special characters
character = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "=", "+", "~", ">", "<", "[", "]", "{", "}", "|"]

// user selection variable declared outside the if statement so it's in the global execution context
var userSelection;

var generateBtn = document.querySelector('#generate')

generateBtn.addEventListener("click", function() {
    password = generatePassword();
    document.getElementById("password").textContent = password;
});

// start function to generate password
function generatePassword() {
    
    //parseInt makes the output a number
    var passwordLength = parseInt(prompt("Number of characters: (Min 8, Max 128)", "8")); 
    
    // first if statement
    if (!passwordLength) {
        //if its not a number, display an error alert
        alert("Error: This needs a value")
    } else if (passwordLength < 8 || passwordLength > 128) {
        //if it doesn't fall between 8-128, display an error alert
        passwordLength = parseInt(prompt("Error: You must choose a number between 8-128"))
    } else {
        //otherwise, confirm which parameters the user would like to include
        confirmNumber = confirm("Would you like to include numbers?");
        confirmCharacter = confirm("Would you like to include symbols?");
        confirmUpper = confirm("Would you like to include uppercase characters?");
        confirmLower = confirm("Would you like to include lowercase characters?");
    };

    //if statement for 4 negative selections
    if (!confirmNumber && !confirmCharacter && !confirmUpper && !confirmLower) {
        alert("You must choose at least one character type!");
    };





};