let symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ";", ":", "|", "'", "?", "/", "<", ">", "{", "}", "[", "]", "-", "_", "+","="];
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "y", "Z"];
let main = [];

function generatePassword() {

  let password = "";

  let useSymbol = confirm("Do you want symbols?");
  let useNumber = confirm("Do you want numbers?");
  let useLowerCase = confirm("Do you want lowercase?");
  let useUpperCase = confirm("Do you want uppercase?");

  if (useSymbol == true) {
    main.push(symbol)
  }

  if (useNumber == true) {
    main.push(number)
  }

  if (useLowerCase == true) {
    main.push(lowerCase);

  }
  if (useUpperCase == true) {
    main.push(upperCase)
  }

  let passwordLength = parseInt(prompt("How long do you want your password to be? Must be over 8 and under 128."));
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Must be 8 or more characters while being less than 128 characters.");
    passwordLength = parseInt(prompt("How long do you want your password to be? Must be over 8 and under 128."));
  }

  for (let i = 0; i < passwordLength; i++) {

    let randomArray;
    let myArray;
    let randomItem;
    let randomCharacter;

    randomArray = parseInt(Math.floor(Math.random() * main.length));

    myArray = main[randomArray]; 

    randomItem = Math.floor(Math.random() * myArray.length);

    randomCharacter = myArray[randomItem];

    password += randomCharacter;
  }

  pass.textContent = password;
}

let generateButton = document.getElementById("generateButton");
let pass = document.getElementById("password");
generateButton.onclick = generatePassword;