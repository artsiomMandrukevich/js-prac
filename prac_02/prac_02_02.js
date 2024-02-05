/*
Known: 1 January of 2023 is Sunday
The function calculates the name of the day from the 2023 year using the day's number and the month's number.
*/

function returnDayName(dd, mm) {

    let monthsCatalog = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };
    let daysCatalog = { 1: "Sunday", 2: "Monday", 3: "Tuesday", 4: "Wednesday", 5: "Thursday", 6: "Friday", 0: "Saturday" };
    let numberOfDay = 0;

    if (typeof dd != "number" || typeof mm != "number") {
        throw new TypeError("arguments must be numbers");
    }

    if (isNaN(dd) || isNaN(mm)) {
        throw new TypeError("arguments must be not NaN");
    }

    if (mm < 0 || mm > 13) {
        throw new TypeError("month must be between 1 ... 12");
    }

    if (dd < 0 || dd > monthsCatalog[mm]) {
        throw new TypeError("day must be correct");
    }

    switch (true) {
        case mm === 1:
            numberOfDay = dd % 7;
            break;
        case mm === 12:
            for (i = 1; i < 12; i++)
                numberOfDay = numberOfDay + monthsCatalog[i];
            numberOfDay = (334 + dd) % 7;
            break;
        default:
            for (i = 1; i < mm - 1; i++)
                numberOfDay = numberOfDay + monthsCatalog[i];
            numberOfDay = (numberOfDay + dd) % 7;
    }
    console.log(daysCatalog[numberOfDay]);

}

returnDayName(1, 1);