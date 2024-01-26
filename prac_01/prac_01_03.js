/*
Find the highest digit from the input number
*/

let inputNumber = +prompt("Input number not grather than 1_000_000_000");
errorMessage = "Input Error";
let compareNumber = 0;

if (isNaN(inputNumber)) {
    alert(errorMessage);
    throw new Error(errorMessage);
}
else if (!Number.isInteger(inputNumber)) {
    alert(errorMessage);
    throw new Error(errorMessage);
}
else if (inputNumber >= 1_000_000_000) {
    alert(errorMessage);
    throw new Error(errorMessage);
}

let testNumber = inputNumber.toString();
for (let i = 0; i < testNumber.length; i++) {
    if(compareNumber < Number(testNumber[i])){
        compareNumber = Number(testNumber[i])
    }
}
alert(compareNumber);