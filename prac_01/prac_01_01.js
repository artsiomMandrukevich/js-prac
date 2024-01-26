/*
Compare two entered numbers.
*/

while(1 != 2){
    let firstNumber = +prompt("Input first number");
    let secondNumber = +prompt("Input second number");
    
    if(isNaN(firstNumber)) {
        errorMessage = "The first input is not a number"
        alert(errorMessage);
        throw new Error(errorMessage);
    }
    
    if(isNaN(secondNumber)) {
        errorMessage = "The second input is not a number"
        alert(errorMessage);
        throw new Error(errorMessage)
    }
    
    switch (true) {
        case firstNumber < secondNumber:
            alert("The first number is less than the second");
            break;
        case firstNumber === secondNumber:
            alert("Numbers are equal");
            break;
        default:
            alert("The second number is less than the first");
    }
}