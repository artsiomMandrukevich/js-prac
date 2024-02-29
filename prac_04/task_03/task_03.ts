/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/member-delimiter-style */
interface IUnit {
    id: number,
    name: string,
    health: number,
    weapon: string
}

abstract class BaseUnit implements IUnit {
    id: number;
    name: string;
    health: number;
    weapon: string;
    constructor (id: number, name: string, health: number, weapon: string) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.weapon = weapon;
    }
}

class Warrior extends BaseUnit {
    constructor (id: number, name: string, health: number) {
        super(id, name, health, 'Sword');
    }
}

class Mage extends BaseUnit {
    constructor (id: number, name: string, health: number) {
        super(id, name, health, 'Staff');
    }
}

let uid: () => number =
    function (): number {
        return 2;
    }

interface ISquad {
    addUnit(unit: IUnit): void;
    getUnitById(id: number): IUnit;
    calculateTotalHealth(): number;
}

class SquadImpl implements ISquad {
    squad: IUnit[] = []

    addUnit (unit: IUnit): void {
        this.squad.push(unit);
    }

    getUnitById (id: number): IUnit {
        let unit;
        for (const item of this.squad) {
            if (item.id === id) {
                unit = item
            }
        }
        return unit;
    }

    calculateTotalHealth (): number {
        let healthSum: number = 0;
        for (const item of this.squad) {
            healthSum = healthSum + item.health;
        }
        return healthSum;
    }
}


// Execution part
const w1 = new Warrior(1, 'Name', 100);
const m1 = new Mage(2, 'Name', 100);
const m2 = new Mage(3, 'Name', 100);
const w2 = new Warrior(4, 'Name', 100);

let mySquad = new SquadImpl();
mySquad.addUnit(w1);
mySquad.addUnit(m1);
mySquad.addUnit(m2);
mySquad.addUnit(w2);

console.log(mySquad);
console.log(mySquad.getUnitById(3));
console.log(mySquad.calculateTotalHealth());

