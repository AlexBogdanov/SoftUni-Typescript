import Box from './01GenericBoxOfString';
import CompareElements from './02GenericCompareElements';
import Tuple from './03Tuple';
import Threeuple from './04Threeuple';
import CarDealership from './05CarDealership';
import PersonalAccount from './06BankTransactions';

// 01 Generic Box Of String
console.log('01 Generic Box Of String');

const box1 = new Box(['test']);
const box2 = new Box(20);
const box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
console.log('=============================================================');

// 02 Generic Compare Elements
console.log('02 Generic Compare Elements');

const c1 = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
const c2 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

console.log(c1.compare('b'));
console.log(c2.compare(1));
console.log('=============================================================');

// 03 Tuple
console.log('03 Tuple');

const n1 = new Tuple('Svetoslav', 'Sofia');
const n2 = new Tuple("Apples", 10);
const n3 = new Tuple(10, 100091);

console.log(n1.toString());
console.log(n2.toString());
console.log(n3.toString());
console.log('=============================================================');

// 04 Threeuple
console.log('04 Threeuple');

const n = new Threeuple ('Hello World', [1], 312);
console.log(n.toString());
console.log('=============================================================');

// 05 Car Dealership
console.log('05 Car Dealership');

const dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');

console.log(dealership.showDetails());
console.log('=============================================================');

// 06 Bank Transactions
console.log('06 Bank Transactions');

const account = new PersonalAccount('DSK', '101240', 'Ivan Ivanov');
const account2 = new PersonalAccount('Fibank', '100000', 'Petar Petrol');

account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');

console.log(account.showDetails());
console.log(account2.showDetails());
console.log('=============================================================');
