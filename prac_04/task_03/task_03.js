class BaseUnit {
    id;
    name;
    health;
    weapon;
    constructor(id, name, health, weapon) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.weapon = weapon;
    }
}
class Warrior extends BaseUnit {
    constructor(id, name, health) {
        super(id, name, health, 'Sword');
    }
}
class Mage extends BaseUnit {
    constructor(id, name, health) {
        super(id, name, health, 'Staff');
    }
}
let uid = function () {
    return 2;
};
class SquadImpl {
    squad = [];
    addUnit(unit) {
        this.squad.push(unit);
    }
    getUnitById(id) {
        let unit;
        for (const item of this.squad) {
            if (item.id === id) {
                unit = item;
            }
        }
        return unit;
    }
    calculateTotalHealth() {
        let healthSum = 0;
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
