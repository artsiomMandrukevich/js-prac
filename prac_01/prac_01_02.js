/*
Print all three-digit positive integers whose sum of digits is 15.
*/

for (let i = 100; i <= 999; i++){
    let testNumber = i.toString();
    let sum = 0;
    for (let i = 0; i < testNumber.length; i++) {
        sum += Number(testNumber[i]);
    }
    if (sum%15 === 0) {
        alert(testNumber);    
    }    
}