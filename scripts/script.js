/*jshint esversion: 6 */
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// DOM elements
const lengthEl = document.getElementById("length-el");
const uppercaseEl = document.getElementById("uppercase-el");
const lowercaseEl = document.getElementById("lowercase-el");
const symbolsEl = document.getElementById("symbols-el");
const numbersEl = document.getElementById("numbers-el");

let passField = document.querySelectorAll(".password");

const generateEl = document.getElementById("generate-el");

// Separates each character
const UPPER_CODE = getRandomCharacter(0, 25);
const LOWER_CODE = getRandomCharacter(26, 50);
const NUMBER_CODE = getRandomCharacter(51, 61);
const SYMBOL_CODE = getRandomCharacter(62, 93);

// Event listeners
generateEl.addEventListener('click', () => {
    // generates a list of passwords based on the number of elements with the class "password"
    let password = [];
    const passwordLength = +lengthEl.value;
    // console.log("length", passwordLength);
    const includeUC = uppercaseEl.checked;
    const includeNum = numbersEl.checked;
    const includeSym = symbolsEl.checked;
    
    for (let i = 0; i < passField.length; i++) {
        const pass = generateRandomPassword(passwordLength, includeUC, includeNum, includeSym);
        password.push(pass);
    };    

    // display the generated elements
    for (let i = 0; i < password.length; i++) {
        passField[i].textContent = password[i];
        passField[i].classList.remove('hidden');
    }
});

// Generates one random character
function getRandomCharacter(low, high) {
    let randomChar = [];
    for (let i = low; i <= high; i++) {
        randomChar.push(i);
    }
    // console.log("randomChar:" ,randomChar);
    return randomChar;
    
};

// Generates a password
function generateRandomPassword(passwordLength, includeUC, includeNum, includeSym) {
    let CHAR_CODES = LOWER_CODE;
    // console.log("CHAR_CODES: ", CHAR_CODES);
    if (includeUC) CHAR_CODES = CHAR_CODES.concat(UPPER_CODE);
    if (includeNum) CHAR_CODES = CHAR_CODES.concat(NUMBER_CODE);
    if (includeSym) CHAR_CODES = CHAR_CODES.concat(SYMBOL_CODE);

    let randomPassword = [];    
    for (let i = 0; i <= passwordLength; i++) {
        // randomPassword += getRandomCharacter();
        const chars = CHAR_CODES[Math.floor(Math.random() * CHAR_CODES.length)]; // previous: passwordLength, It only returned 
        randomPassword.push(characters[chars]);
    };
    console.log("randomPassword: ", randomPassword);
    return randomPassword.join('');
};