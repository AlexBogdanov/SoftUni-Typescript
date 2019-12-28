import Geolocation from './01Geolocation';
import Person from './02Greeter';
import Courier from './03Deliveries';
import PCStore from './04Shops';

// 01 Geolocation
console.log('01 Geolocation');
const locator = new Geolocation(42.698334, 23.319941);

locator.showCoordinates();
console.log('=========================================================');

// 02 Greeter
console.log('02 Greeter');
const p = new Person('Ivan Ivanov', 25);

console.log(p.introduction());
console.log(p.sayGoodbye('Petar Petrov'));
console.log('=========================================================');

// 03 Courier
console.log('03 Courier');
const courier = new Courier([{ customerName: 'DHL', visited: false }]);

courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');

console.log(courier.showCustomers());
console.log('=========================================================');

// 04 Shops
console.log('04 Shops');
const pcStore = new PCStore('AllBestPCs', 'Sofia', 10000);
 
pcStore.buyParts('CPU', 300);
pcStore.buyParts('CPU', 300);
pcStore.buyParts('CPU', 300);
pcStore.buyParts('CPU', 300);
pcStore.buyParts('Graphic card', 200);
pcStore.buyParts('Graphic card', 200);
pcStore.buyParts('Graphic card', 200);
pcStore.buyParts('RAM', 70);
pcStore.buyParts('RAM', 70);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('HDD', 30);
pcStore.buyParts('SSD', 60);
pcStore.buyParts('SSD', 60);
pcStore.buyParts('SSD', 60);
pcStore.buildPC(['HDD', 'CPU', 'Graphic card', 'RAM'], 'Regular PC', 1000);
pcStore.buildPC(['HDD', 'SSD', 'CPU', 'Graphic card', 'RAM'], 'Gaming PC', 1700);

console.log(pcStore.sellPC('Regular PC', 1300));
console.log(pcStore.showInventory());
console.log('=========================================================');
