/*jshint esversion: 6 */
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// DOM elements

const lengthEl = document.getElementById("length-el");
const uppercaseEl = document.getElementById("uppercase-el");
const lowercaseEl = document.getElementById("lowercase-el");
const symbolsEl = document.getElementById("symbols-el");
const numbersEl = document.getElementById("numbers-el");

const resultEl1 = document.getElementById("password-el-1");
const resultEl2 = document.getElementById("password-el-2");

const generateEl = document.getElementById("generate-el");

// Saves the returned value of each function in a key 

const randomFunc = {
    lower: getLowercase,
    numbers: getNumbers,
    symbols: getSymbols,
    upper: getUppercase    
};

// Values checker function

generateEl.addEventListener("click", () => {
    const hasLength = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasSymbol = symbolsEl.checked;
    const hasNumbers = numbersEl.checked;
    
    resultEl1.innerText = generatePassword(hasLower, hasUpper, hasNumbers, hasSymbol, hasLength);
});

function generatePassword(lower, upper, numbers, symbols, length) {
    let password = '';
    
    // if nothing is checked, then no password will be generated
    const typesCount = lower + upper + numbers + symbols;
    if (typesCount === 0) {
        return '';
    }
    // console.log("typesCount: ", typesCount)
    
    // filters out any value that is false; any unchecked box
    const typesArr = [{lower}, {upper}, {numbers}, {symbols}].filter(item => Object.values(item)[0]);
	
    //console.log("typesArr: ", typesArr)
    

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            // Object = randomFunc
            // keys = lower (or any key) 
            // type = hasLower
            // password += randomFunc.lower(hasLower)[0]
            // All it does, is check which one is checked
            const funcName = Object.keys(type)[0];
            //console.log('funcName: ', funcName)            
            password += randomFunc[funcName];
        });
    }
    const finalPassword = password.slice(0, length);
    console.log(finalPassword);
    return finalPassword;
}

// Functions that generate a character from the list

function getUppercase() {
    return String.characters[Math.floor(Math.random() * 26)] ;
}

function getLowercase() {
    return String.characters[Math.floor(Math.random() * 26) + 26];
}

function getNumbers() {
    return String.characters[Math.floor(Math.random() * 10) + 52];
}

function getSymbols() {
    return String.characters[Math.floor(Math.random() * 29) + 62];
}