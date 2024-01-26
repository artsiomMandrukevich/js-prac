/*
Enter two digits. Print a digit between a and b if the binary sum of this digit is 4.
*/ 

let a = +prompt("Input a");
let b = +prompt("Input b");

if (a > b) {
    [a, b] = [b, a];
}

if (a <=0) {
    a = 0;
}

for(let i=a; i <= b; i++) {
    let testNumber = (i >>> 0).toString(2);
    let sum = 0;
    for (let i = 0; i < testNumber.length; i++) {
        sum += Number(testNumber[i]);
    }
    if(sum === 4) {
        alert(i + " " + testNumber);
    }
}

