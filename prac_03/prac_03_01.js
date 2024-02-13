/*
Create a function generateTestData() that will generate the array of objects with properties ID, name, and age.
Name should be 10 characters from range A..Z. Age should be in range 18 .. 99
Create verification functions that validate the generateTestData() function.
*/

// functions for generating test data

function nameGenerator() {
    let alphabet = 'ABCDEFGHIJKLMNOPRSTUVWXYZ',
        name = '';
    for (let i = 0; i < 10; i++) {
        name += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    return name;
}

function ageGenerator() {
    return Math.floor(Math.random() * (99 - 18) + 18)
}

function createObject(num) {
    let objTest = {
        id: num,
        name: nameGenerator(),
        age: ageGenerator()
    }
    return objTest;
}

function generateTestData(num) {

    if (typeof num != "number") {
        throw new TypeError("arguments must be numbers");
    }

    if (num <= 0) {
        throw new RangeError("argument should be in range [5 .. 99]");
    }

    let objectArray = [];

    for (let i = 0; i < num; i++)
        objectArray[i] = createObject(i);

    return objectArray
}

// functions for verifying that test data is generated correctly
// let testTestData = [{id: 0, name: 'GVYKKSKVNG', age: 68}, {id: 1, name: 'FDFYJNSKFG', age: 57}, {id: 2, name: 'YYHTWEBUZX', age: 74}]

function isArrayLengthAndIdCorrect(count) {
    let testData = generateTestData(count);
    if (count != testData.length || testData[count - 1].id != count - 1)
        throw new TypeError("The name's length is incorrect");
}

function isNameLengthCorrect(count) {
    let testData = generateTestData(count);
    for (element of testData) {
        if (element.name.length != 10)
            throw new TypeError("The name's length is incorrect");
    }
}

function isAgeGeneratedCorrect(count) {
    let testData = generateTestData(count);
    for (element of testData) {
        if (element.age < 18 || element.age > 99)
            throw new Error("The age's value is incorrect");
    }
}

// Execute section

let count = 7
let resultArray = generateTestData(count);

for (let element of resultArray)
    console.log(element);

isArrayLengthAndIdCorrect(count);
isNameLengthCorrect(count);
isAgeGeneratedCorrect(count);