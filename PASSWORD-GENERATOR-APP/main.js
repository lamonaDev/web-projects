const button = document.querySelector(".passwordGenerator");
const passwordText = document.querySelector(".passwordText");
const clearGeneratedPasswordText = document.querySelector(".passwordClear");
window.onload = function () {
    passwordText.textContent = "'GENERATED PASSWORD'";
}
function passwordGenerator() {
    const charsLowerCase = "qwertyuiopasdfghjklzxcvbnm";
    const charsUpperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numbers = "0123456789";
    const specialSymbols = `!@#$%*+-;:/.,\|[]{}`;
    function lower() {
        let charsLowerCaseArray = [];
        for (let i = 0; i < charsLowerCase.length; i++) {
            charsLowerCaseArray[charsLowerCaseArray.length] = charsLowerCase[i];
        }
        let finalChars = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * charsLowerCaseArray.length);
            finalChars[finalChars.length] = charsLowerCaseArray[randomIndex];
        }
        return finalChars.join("")
    };
    function upper() {
        let charsUpperCaseArray = [];
        for (let i = 0; i < charsUpperCase.length; i++) {
            charsUpperCaseArray[charsUpperCaseArray.length] = charsUpperCase[i];
        }
        let finalChars = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * charsUpperCaseArray.length);
            finalChars[finalChars.length] = charsUpperCaseArray[randomIndex];
        }
        return finalChars.join("")
    };
    function number() { 
        let numbersArray = [];
        for (let i = 0; i < numbers.length; i++) {
            numbersArray[numbersArray.length] = numbers[i];
        }
        let finalChars = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * numbersArray.length);
            finalChars[finalChars.length] = numbers[randomIndex];
        }
        return finalChars.join("")
    };
    function special() {
        let specialCharArray = [];
        for (let i = 0; i < specialSymbols.length; i++) {
            specialCharArray[specialCharArray.length] = specialSymbols[i];
        }
        let finalChars = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * specialSymbols.length);
            finalChars[finalChars.length] = specialCharArray[randomIndex];
        }
        return finalChars.join("")
    };
    function finalPass() { 
        let all = [...upper(), ...number(), ...lower(), ...special()];
        let subb = [];
        for (let i = 0; i < all.length; i++) {
            let randomIndex = Math.floor(Math.random() * all.length);
            subb[subb.length] = all[randomIndex];
        }
        return subb.join("")};
    return finalPass();
}
console.log(passwordGenerator());
button.addEventListener("click", function () {
    passwordText.textContent = passwordGenerator();
})
clearGeneratedPasswordText.addEventListener("click", function () {
    passwordText.textContent = "'CLEARED'";
})