/*
carFactory() function generates object with car's parameters. 
crashTest() fucntion runs a crash test between two cars.
Сreate test functionы for validating a logic of the crashTest() function.
*/

// tests functions
function velocityDistancePositiveCrashTest() {

    /* 
        Test pass if a velocity at least of one car > 0 and the distance between cars more than 1
    */

    const firstCar = carFactory("Mazda", 0, 1, 2);
    const secondCar = carFactory("Mazda", 100, 5, 2);

    if (!crashTest(firstCar, secondCar))
        throw new Error("Velocity and distance test fails");

}

function velocityNegativeCrashTest() {

    /* 
        Test pass when the crashTest() function returns false value 
        in the case a velocity of two cars is 0
    */

    const firstCar = carFactory("Mazda", 0, 1, 2);
    const secondCar = carFactory("Mazda", 0, 5, 2);

    if (crashTest(firstCar, secondCar))
        throw new Error("Velocity test fails");

}

function distanceNegativeCrashTest() {

    /* 
        Test pass when the crashTest() function returns false value 
        in the case a distance between cars less than 1
    */

    const firstCar = carFactory("Mazda", 0, 1, 2);
    const secondCar = carFactory("Mazda", 100, 1, 2);

    if (crashTest(firstCar, secondCar))
        throw new Error("Distance test fails");

}

// Car factory

function carFactory(model, velocity, x, y) {
    if (typeof model != "string") {
        throw new TypeError("model should be a string");
    }

    if (velocity < 0 && velocity > 120) {
        throw new RangeError("velocity should between 0 and 120");
    }

    if (typeof x != "number" || typeof x != "number") {
        throw new TypeError("x, y should number");
    }

    const car = {
        model: model,
        velocity: velocity,
        x: x,
        y: y
    }

    return Object.freeze(car);
}

function crashTest(firstCar, secondCar) {
    velocityCheck = firstCar.velocity > 0 || secondCar.velocity > 0;
    distanceCheck = (Math.sqrt((secondCar.x - firstCar.x) ** 2 + (secondCar.y - firstCar.y) ** 2)) > 1;
    return velocityCheck && distanceCheck;
}

// Execute section

velocityDistancePositiveCrashTest();
velocityNegativeCrashTest();
distanceNegativeCrashTest();



