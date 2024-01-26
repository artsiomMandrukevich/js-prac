let a = +prompt("Input a");
let b = +prompt("Input b");

if (a > b) {
    [a, b] = [b, a];
}

if (a <=0) {
    a = 0;
}