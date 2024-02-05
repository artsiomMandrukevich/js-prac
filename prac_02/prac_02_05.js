/*
The sequence (start, end) returns a new function that generates a numerical sequence starts from start and increment equals step.
*/

function sequence(start = 0, step = 1) {
    counter = 0;
    function generator() {
        decr = start + step * counter;
        counter++;
        return decr;
    }
    return generator;
}

let gen = sequence(10, 3);

console.log(gen()); // 10
console.log(gen()); // 13
console.log(gen()); // 16
console.log(gen()); // 19
console.log(gen()); // 22
console.log(gen()); // 25
console.log(gen()); // 28
console.log(gen()); // 31