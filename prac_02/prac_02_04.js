/*
The frequency function determines the frequency symbol present in the string.
*/


function frequency(s) {

    console.log(s.length);

    if (typeof s != "string") {
        throw new TypeError("argument should be a string");
    }

    let symbolFrequencyResult = {};

    function symbolFrequency(char, s) {
        let symbolCount = 0;
        for (let i = 0; i < s.length; i++) {
            char === s[i] ? symbolCount++ : false;
        }

        return symbolCount;
    }

    function largestSymbolFrequency(obj) {
        let largestKey;
        let largestValue = 0;

        for (key in obj) {
            if (largestValue < obj[key]) {
                largestKey = key;
                largestValue = obj[key];
            }
        }

        return largestKey;
    }

    for (let i = 0; i < s.length; i++) {
        symbolFrequencyResult[s[i]] = symbolFrequency(s[i], s);
    }

    return largestSymbolFrequency(symbolFrequencyResult);
}

var str = "My test string!!";

console.log("Test string is : " + str + ". The most frequents symbol is : " + frequency(str));
