/*
The function handles two digits.
if both digits positive - show products of digits
if both digits negative - show sum of digits
if one of them is negative negative - show this negative digit
*/

function returnDigitsResult(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        throw new TypeError("sum(): arguments must be numbers");
    }

    if (isNaN(a) || isNaN(b)) {
        throw new TypeError("sum(): arguments must be not NaN");
    }

    switch (true) {
        case a >= 0 && b >= 0:
            c = a * b;
            console.log("a * b = " + c);
            break;
        case a < 0 && b < 0:
            c = a + b;
            console.log("a - b = " + c);
            break;
        case a < 0 && b > 0 || a > 0 && b < 0:
            c = a < 0 ? a : b;
            console.log("c = " + c);
            break;
    }
}

returnDigitsResult(1, -332);