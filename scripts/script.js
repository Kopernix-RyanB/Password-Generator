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

// Generator functions

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

// Password assembler function

generateEl.addEventListener("click", () => {
    let length = +lengthEl.value
    
})


// let passwordLength = 12

// function getRandomCharacter() {
//     let randomChar = Math.floor(Math.random() * characters.length)
//     return characters[randomChar]
// }

// function generateRandomPassword() {
//     let randomPassword = ""
//     for (let i = 0; i < passwordLength; i++) {
//         randomPassword += getRandomCharacter()         
//     }
//     return randomPassword
// }

// const generatedPasswordOne = generateRandomPassword()

// console.log("Here is a random password: ", generatedPasswordOne)

