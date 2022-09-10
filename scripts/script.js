const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// DOM elements

let lengthEl = document.getElementById("length-el")
let uppercaseEl = document.getElementById("uppercase-el")
let lowercaseEl = document.getElementById("lowercase-el")
let symbolsEl = document.getElementById("symbols-el")
let numbersEl = document.getElementById("numbers-el")

let resultEl1 = document.getElementById("password-el-1")
let resultEl2 = document.getElementById("password-el-2")

let generateEl = document.getElementById("generate-el")

// Functions that generate a character from the list

function getUppercase() {
    return characters[Math.floor(Math.random() * 26)] 
}

function getLowercase() {
    return characters[Math.floor(Math.random() * 26) + 26]
}

function getNumbers() {
    return characters[Math.floor(Math.random() * 10) + 52]
}

function getSymbols() {
    return characters[Math.floor(Math.random() * 29) + 62]
}

// Saves the returned value of each function in a key 

const randomFunc = {
    lower: getLowercase,
    upper: getUppercase,
    number: getNumbers,
    symbol: getSymbols
}

// Values checker function

generateEl.addEventListener("click", () => {
    let hasLength = +lengthEl.value
    let hasUpper = uppercaseEl.checked
    let hasLower = lowercaseEl.checked
    let hasSymbol = symbolsEl.checked
    let hasNumbers = numbersEl.checked
    // I THINK I SHOULD PASS THE VARIABLES IN THE CALLED FUNCTION
    resultEl1.innerText = generatePassword(hasLength, hasLower, hasNumbers, hasSymbol, hasUpper)
})

function generatePassword(hasLength, hasLower, hasNumbers, hasSymbol, hasUpper) {
    let password = ""
    
    // if nothing is checked, then no password will be generated
    const typesCount = hasLower + hasNumbers + hasUpper + hasSymbol
    if (typesCount === 0) {
        return ''
    }
    // console.log("typesCount: ", typesCount)
    
    // filters out any value that is false; any unchecked box
    const typesArr = [{hasLower}, {hasNumbers}, {hasSymbol}, {hasUpper}].filter
    (
        item => Object.values(item)[0]
    )
    // console.log("typesArr: ", typesArr)
    

    for (let i = 0; i < hasLength; i += typesCount) {
        typesArr.forEach(type => {
            // Object = randomFunc
            // keys = lower (or any key) 
            // type = hasLower
            // password += randomFunc.lower(hasLower)[0]
            // All it does, is check which one is checked
            const funcName = Object.keys(type)[0]
            //console.log('funcName: ', funcName)
            
            password += randomFunc[funcName]
        })
    }

    console.log(password)
}