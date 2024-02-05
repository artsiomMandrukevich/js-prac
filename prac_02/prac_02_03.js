/*
The function series() creates an array with three parameters: start, end, and step.
*/

function series(startPosition, endPosition, step = 1) {

    let finalArray = [];

    // function validation
    if (typeof startPosition != "number" || typeof endPosition != "number" || step === 0) {
        return finalArray;
    }

    if (step < 0 && (startPosition < endPosition || startPosition - endPosition < Math.abs(step))) {
        return finalArray;
    }

    if (step > 0 && (startPosition > endPosition || endPosition - startPosition < step)) {
        return finalArray;
    }

    // function logic
    for (let i = 0; i <= Math.abs(endPosition - startPosition) / Math.abs(step); i++)
        finalArray[i] = startPosition + step * i;

    return finalArray;
}

console.log(series(10, -20, 1));