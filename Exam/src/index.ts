import Racers from './Racers';
import Quali from './Quali';
import Race from './Race';

// 01 Racers
console.log('01 Racers');
const racers = new Racers();
racers.createRacer('Lewis', 'Hamilton', '11.12.1988', 44);
racers.signContract(44, 'Mercedes', 10000000, 4);
racers.createRacer('Sebastian', 'Vettel', '11.11.1986', 5);
racers.signContract(5, 'Ferrari', 4899990, 2);
racers.createRacer('Valteri', 'Bottas', '11.11.1986', 22);
racers.signContract(22, 'Mercedes', 900000, 2);
racers.createRacer('Max', 'Verstappen', '11.11.1986', 33);

console.log(racers.signContract(33, 'Redbull', 900100, 3));
console.log(racers.renewContract(33, 98765, 4));
console.log(racers.signWithNewTeam(5, 'Redbull', 1234567, 2));
console.log('====================================================================');

// 02 Quali
console.log('02 Quali');
const q = new Quali();
q.fastestLap(22, 1.24);
q.fastestLap(44, 1.22);
q.fastestLap(5, 1.25);
q.fastestLap(33, 1.23);

console.log(q.standings());
console.log('====================================================================');

// 03 Race
console.log('03 Race');
const race = new Race('Sepang');

race.overtake(22, 33);
race.overtake(5, 33);
race.overtake(5, 22);
race.overtake(22, 5);
race.overtake(5, 22);
race.winRace();

console.log(race.showStandings());
console.log('====================================================================');

export {
    racers,
    q
};
