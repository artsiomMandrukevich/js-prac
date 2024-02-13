/* 
Create a class Vector where:
    - create get & set for x, y properties (x, y should be a number);
    - create get & set for a length property;
    - create a static property Zero with a zero vector
    - create a toString() method
    - create a dot() method
*/

class Vector {

    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get x() {
        return this.x;
    }

    set x(value) {
        this.#check(value);
        this.x = value;
    }

    get y() {
        return this.y;
    }

    set y(value) {
        this.#check(value);
        this.y = value;
    }

    get length() {
        return Math.sqrt((this.x + this.y) ** 2);
    }

    static Zero = new Vector(0, 0);

    toString() {
        return "x: " + this.x + " y: " + this.y;
    }

    valueOf() {
        return Math.sqrt((this.x + this.y) ** 2);
    }

    static dot(vectorOne, vectorSecond) {
        return vectorOne.x * vectorSecond.x + vectorOne.y * vectorSecond.y;
    }

    #check(value) {
        if (typeof value != "number") {
            throw new TypeError("argument should be a number");
        }
    }

}

// Execution part

const v1 = new Vector(1, 3);
const v2 = new Vector(2, 2);

console.log(v1.x, v1.y);
console.log(v1.length);
console.log(v1.toString());
console.log(v1.valueOf());

const vz = Vector.Zero;
console.log(v2.x + " " + vz.y + " " + vz.length + " " + vz.toString());

console.log("skalyar: " + Vector.dot(v1, v2))






