/*
Create a SquareMatrix class to represent a square matrix consisting of 32-bit signed integers (Int32Array). 
Provide the SquareMatrix class with an iterator that returns the matrix elements on its main diagonal.
*/

class SquareMatrix {
    constructor(size) {
        this.rows = size;
        this.cols = size;
        this.data = new Int32Array(size * size);
    }

    getValue(i, j) {
        return this.data[i * this.cols + j];
    }

    setValue(i, j, value) {
        this.data[i * this.cols + j] = value;
    }

    *[Symbol.iterator]() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.rows; j++) {
                if (i === j) {
                    yield this.getValue(i, j);
                }
            }
        }
    }

}

const size = 3;
const c = new SquareMatrix(size);

for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        value = (i + j) * j;
        c.setValue(i, j, value);
        console.log("[" + i + ":" + j + "] = " + value);
    }
}

console.log("Main diagonal of the matrix: ")
for (const item of c) {
    console.log(item);
}


