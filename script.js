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
// reference "below code demonstrated: https://attacomsian.com/blog/javascript-array-lowercase-uppercase#:~:text=In%20JavaScript%2C%20you%20can%20use,the%20case%20of%20the%20elements.&text=The%20toUpperCase()%20method%20converts,without%20changing%20the%20original%20string."
var alphabetUppercase = alphabet.map(letters => letters.toUpperCase());
// numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// special characters
var character = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "=", "+", "~", ">", "<", "[", "]"]

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
    //reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
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
        confirmNumber = confirm("Would you like to include numbers? If no, click cancel");
        confirmCharacter = confirm("Would you like to include symbols? If no, click cancel");
        confirmUpper = confirm("Would you like to include uppercase characters? If no, click cancel");
        confirmLower = confirm("Would you like to include lowercase characters? If no, click cancel");
    };

    //if statements for user selections
    //4 negative selections
    if (!confirmNumber && !confirmCharacter && !confirmUpper && !confirmLower) {
        userSelection = alert("Error: You must choose at least one character type");
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
    //empty array to store final password
    var finalPassword = [];
    //"randomly" select characters based on userSelection
    for (var i = 0; i < passwordLength; i++) {
    var randomPassword = userSelection[Math.floor(Math.random() * userSelection.length)];
    //".push" adds the array passed to it to the original array 
    //i.e. randomPassword will be added to the variable finalPassword, which is empty
    finalPassword.push(randomPassword);
    }

    //".join" gets the returned array from finalPassword and joins them together
    //the parameter determines what it should be joined together by, in this case, nothing
    //a space in this parameter will put a space between each character in the password
    var password = finalPassword.join('');
    userInput(password);
    return password;
}
function userInput(password) {
    //get final version of password and write to the text area defined by id #password
    document.getElementById("password").textContent = password;
    //log password to console
    console.log("Password: " + password);
    //log password length to console
    console.log("Password length: " + password.length);

    //password security test (please note this is a gimmick to show an example of this code
    //i'm sure a 128 character password featuring only lowercase, randomly generated characters will
    //probably be secure haha!)

    //if 4 positive selections = high security
    if (confirmNumber && confirmCharacter && confirmUpper && confirmLower) {
        console.log("Password security: High Security!");
    }
    //if 3 positive selections = moderate security
    else if (confirmNumber && confirmCharacter && confirmLower){
        console.log("Password security: Moderate Security!");
    } else if (confirmNumber && confirmCharacter && confirmUpper){
        console.log("Password security: Moderate Security!");
    } else if (confirmNumber && confirmUpper && confirmLower){
        console.log("Password security: Moderate Security!");
    } else if (confirmCharacter && confirmUpper && confirmLower){
        console.log("Password security: Moderate Security!");
    }
    //if 2 positive selections = low security
    else if (confirmNumber && confirmCharacter){
        console.log("Password security: Low Security!");
    } else if (confirmNumber && confirmUpper){
        console.log("Password security: Low Security!");
    } else if (confirmNumber && confirmLower){
        console.log("Password security: Low Security!");
    } else if (confirmCharacter && confirmUpper){
        console.log("Password security: Low Security!");
    } else if (confirmCharacter && confirmLower){
        console.log("Password security: Low Security!");
    } else if (confirmUpper && confirmLower){
        console.log("Password security: Low Security!");
    }
    //if 1 positive selection = no security at all
    else if (confirmNumber) {
        console.log("Password security: Not secure!");
    } else if (confirmCharacter) {
        console.log("Password security: Not secure!");
    } else if (confirmLower) {
        console.log("Password security: Not secure!");
    } else if (confirmUpper) {
        console.log("Password security: Not secure!");
    }
};

//end