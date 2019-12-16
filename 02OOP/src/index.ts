import Person from './01DefineAClassPerson';
import Family from './02FamilyMembers';
import Circuit from './03Racing';
import Car from './04CarDetails/Car';
import Engine from './04CarDetails/Engine';
import Details from './04CarDetails/index';
import ParkingLot from './05ParkingLot';

// 01 Define a class Person
const ivan = new Person('Ivan', 20);
const todor = new Person('Todor', 35);
const peter = new Person('Peter', 14);

console.log('01 Define a class Person');
console.log(ivan);
console.log(todor);
console.log(peter);
console.log('================================================');

// 02 Family members
const member = new Family();
member.addNewMember(['Ivan', 13]);
member.addNewMember(['Todor', 45]);
member.addNewMember(['Georgi', 37]);
member.addNewMember(['Viktor', 30]);

console.log('02 Family members');
console.log(member.oldestMember());
console.log('================================================');

// 03 Racing
console.log('03 Racing');

let race = new Circuit();
race.createRacer('LH', 100, 1);
race.createRacer('VB', 100, 3);
race.createRacer('DR', 100, 4);
race.consumeFuel(92, 'LH');
race.consumeFuel(87, 'VB');
race.consumeFuel(89, 'DR');
race.overtake('LH', 'VB');
console.log(race.overtake('DR', 'VB'));
race.overtake('LH', 'VB');

console.log(race.showPositions());
console.log('================================================');

// 04 Car Details
console.log('04 Car Details');

new Details(new Car('C class', 3982, 'red'), new Engine('MB177', 510, 3982, 'A'));
console.log();
new Details(new Car('C class'), new Engine('MB177', 510));

console.log('================================================');

// 05 Parking Lot
console.log('05 Parking Lot');

let p = new ParkingLot(5);
try {
    p.parkVehicle('CA1111CA');
    p.parkVehicle('CA2222CA');
    p.parkVehicle('CA3333CA');
    p.parkVehicle('CA4444CA');
    p.parkVehicle('CA5555CA');
    
    p.payForStay(4, 2, 'CA1111CA');
    p.payForStay(2, 2, 'CA2222CA');
    p.payForStay(7, 2, 'CA4444CA');
    
    p.leaveTheParking('CA1111CA');
    p.leaveTheParking('CA4444CA');
    console.log(p.overview());
} catch (err) {
    console.log(err);
}

console.log('================================================');
