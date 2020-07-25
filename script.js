var lowCaseLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCaseLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "j", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "'", ";", ":", ",", ".", "<", ">", "?", "/",];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//Prompt the user about password

function passwordOptions() {
    var passwordLength =
        prompt("How many characters would you like your password to be?")


    var usersUpCase = confirm("Would you like to use Upper Case letters?");
    var usersLowCase = confirm("Woould you like to use Lower Case letters?");
    var usersNum = confirm("Would you like to include numbers?");
    var usersSpChar = confirm("Would you like to incluse special character?");

    console.log(passwordLength, usersUpCase, usersLowCase, usersNum, usersSpChar);


    //Built master character array, including all characters in it.
    var masterarray = []
    if (usersUpCase === true) {
        masterarray = masterarray.concat(upCaseLet);
    }

    if (usersNum === true) {
        masterarray = masterarray.concat(numbers);
    }
    if (usersSpChar === true) {
        masterarray = masterarray.concat(specChar);
    } if (usersLowCase === true) {
        masterarray = masterarray.concat(lowCaseLet);
    } console.log(masterarray)
    //Dispaly on the screen selected options

    //generate Password
    var password = ""
    for (i = 0; i < passwordLength; i++) {
        randomLetter = masterarray[Math.floor(masterarray.length * Math.random())];
        console.log(randomLetter);
        password += randomLetter;
    }
    console.log(password);

    //Insert Password into correct element HTML DOM
var passwordText = document.querySelector("#password");
passwordText.value = password;





}

passwordOptions()